import React, { Component } from 'react'
import { Breadcrumb, MenuItem, Preloader, Button } from 'react-materialize'
import Gallery from 'react-grid-gallery'
import PropTypes from 'prop-types'
import path from 'path'
import { isArray, isFunction } from 'util'
import Async from 'react-async'

export default class DashBoard extends Component {
  constructor (props) {
    super(props)
    console.log('props inside dashboard ///////////////////////')
    console.log(props)

    this.state = {
      full_path: this.props.file['full_path'],
      currentFolder: this.props.file['currentFolder']
    }
    this.handle_click = this.handle_click.bind(this)
  }

  createList (paths = []) {
    let that = this
    let back = []
    let add_back_button = !this.state['currentFolder'] == 'Colleges'

    if (add_back_button) {
      back = [
        {
          src: '',
          thumbnail:
            'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/links.png',
          thumbnailWidth: 10,
          thumbnailHeight: 10,
          tags: [{ value: 'back', title: 'Name' }]
        }
      ]
    }
    console.log('paths')
    console.log(JSON.stringify(paths))
    paths = isArray(paths) ? paths : paths.value
    return back.concat(
      (paths || []).map(function ({ key }) {
        var { name, ext } = path.parse(key)
        return {
          src: '',
          type: ext == '' ? 'folder' : 'file',
          thumbnail:
            that.props.ext_to_icon[ext] ||
            'https://cdn1.iconfinder.com/data/icons/communication-bold-line-2/48/69-512.png',
          thumbnailWidth: 10,
          thumbnailHeight: 10,
          tags: [{ value: name + ext, title: 'Name' }]
        }
      })
    )
  }

  handle_navigate (ele) {
    console.log('handle_navigate')
    let [{ value }] = ele.tags
    console.log('folder name  ::::::: ', value)
    var newFullPath = path.join(this.state.full_path, value)
    this.state.currentFolder = value
    this.state.full_path = newFullPath
    this.props.navigate(newFullPath, value)
  }

  navigate_back () {
    var oldFullPathList = this.state.full_path.split('/')
    oldFullPathList.pop()
    var currentFolder = oldFullPathList[oldFullPathList.length - 1]
    this.state.currentFolder = currentFolder
    this.state.full_path = oldFullPathList.join('/')
    this.props.navigate(oldFullPathList.join('/'), currentFolder)
  }

  handle_download (ele) {
    var name = ele.tags[0]['value']
    var info = {
      filename: name,
      content: 'HI'
    }
    var obj = JSON.stringify(info)
    var data = 'data: ' + 'text/json;charset=utf-8,' + encodeURIComponent(obj)
    var downloader = document.getElementById('downloader')
    downloader.setAttribute('download', name)
    downloader.setAttribute('href', data)
    downloader.click()
  }

  handle_click (index) {
    console.log('index', index, '.................................')
    let ele = this.state.images[index]
    switch (ele.type) {
      case 'folder':
        this.handle_navigate(ele)
        break
      case 'file':
        this.handle_download(ele)
        break
      default:
        this.navigate_back()
    }
  }

  renderGallery (paths) {
    let images = this.createList(paths)
    this.state.images = images

    return (
      <div>
        <Gallery
          images={images}
          enableLightbox={false}
          enableImageSelection={false}
          margin={15}
          rowHeight={80}
          onClickThumbnail={this.handle_click}
        />
        <a
          style={{ display: 'none' }}
          href={''}
          id='downloader'
          download='file.ext'
        />
      </div>
    )
  }

  renderBreadCrumbs (full_path, status) {
    switch (status) {
      case 'Done':
        return (
          <Breadcrumb className='black'>
            {full_path.split('/').reduce(function (acc, name) {
              return acc.concat([<MenuItem key={name}>{name}</MenuItem>])
            }, [])}
          </Breadcrumb>
        )
      case 'Loading':
        return (
          <Breadcrumb className='black'>
            <MenuItem>{'Loading ...'}</MenuItem>
          </Breadcrumb>
        )

      case 'Failed':
        return (
          <Breadcrumb className='black'>
            <MenuItem>{'Failed !!'}</MenuItem>
          </Breadcrumb>
        )

      default:
        return (
          <Breadcrumb className='black'>
            <MenuItem>{''}</MenuItem>
          </Breadcrumb>
        )
    }
  }
  render () {
    console.log('props in render method :............ ')
    console.log(this.props)
    console.log('state in render method :............ ')
    console.log(this.state)
    let fetched = this.props['file']['fetched']
    let full_path = this.props['file']['full_path']
    let current = fetched[full_path] || {}

    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
        <Button onClick={this.props.reset}>Reload</Button>
        <div
          style={{
            display: 'block',
            minHeight: '1px',
            width: '80%',
            border: '5px solid #ddd',
            overflow: 'auto',
            margin: 'auto'
          }}
        >
          {this.renderBreadCrumbs(full_path, current['status'])}
          {current['status'] == 'Loading' && (
            <span
              style={{
                border: '1px solid red',
                display: 'inline-block',
                margin: 'auto',
                width: '30%'
              }}
            >
              <Preloader size='big' />
            </span>
          )}
          {current['status'] == 'Done' && this.renderGallery(current['paths'])}
          {current['status'] == undefined && (
            <span>
              <Button
                onClick={function () {
                  return this.props.fetch(full_path)
                }.bind(this)}
              >
                Fetcher
              </Button>
            </span>
          )}
        </div>
      </div>
    )
  }
}

// DashBoard.propTypes = {
//   fetch: PropTypes.function,
//   file: PropTypes.shape({
//     fetched: PropTypes.shape({ fetched_paths: PropTypes.array.isRequired })
//   })
// }
