import React, { Component } from 'react'
import { Breadcrumb, MenuItem, Preloader, Button } from 'react-materialize'
import Gallery from 'react-grid-gallery'
import PropTypes from 'prop-types'
import path from 'path'

export default class DashBoard extends Component {
  constructor (props) {
    super(props)
    var fetched = this.props['file']['fetched']
    this.state = {
      images: this.createList(fetched['/'] || [], false),
      fetched: fetched || {},
      full_path: '/',
      currentFolder: '/'
    }
    this.handle_click = this.handle_click.bind(this)
  }

  createList (paths = [], add_back_button = true) {
    var that = this
    var back = []

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
    paths = []
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

  updateState (full_path = '/') {
    setTimeout(function () {
      console.log('updateState  full_path ', full_path)
      if (this.props['file']['fetched']['fetched_paths'].includes(full_path)) {
        if (!this.state['fetched']['fetched_paths'].includes(full_path)) {
          console.log('updating state .... this.props.file["fetched"]')
          console.log(this.props.file['fetched'])
          this.state.fetched = {
            ...this.state.fetched,
            ...this.props.file['fetched']
          }
          this.state.images = this.createList(
            this.props['file']['fetched'][full_path],
            path != '/'
          )
        } else {
          alert('already Failed')
        }
      } else {
        this.props.fetch(full_path)
      }
    }, 7000)
  }

  handle_navigate (ele) {
    console.log('handle_navigate')
    var folder_name = ele.tags[0].value
    var old = this.state.fetched[folder_name]
    var newFullPath = path.join(this.state.full_path, folder_name)
    if (old) {
      var new_list = this.createList(old, true)
      this.setState({
        ...this.state,
        images: new_list,
        full_path: newFullPath
      })
    } else {
      if (this.state.fetched['fetched_paths'].includes(folder_name)) {
        alert('something is wrong with fetching data !!')
      } else {
        console.log(
          'setting state inside handle navigate, new full path',
          newFullPath
        )
        var path_list = newFullPath.split('/')
        var folder = path_list[path_list.length - 1]
        this.setState({
          ...this.state,
          images: [],
          full_path: newFullPath,
          currentFolder: folder
        })
      }
    }
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

  navigate_back () {
    var oldFullPathList = this.state.full_path.split('/')
    oldFullPathList.pop()
    var currentFolder = oldFullPathList[oldFullPathList.length - 1]
    this.setState({
      ...this.state,
      images: this.state.fetched.currentFolder,
      currentFolder: currentFolder,
      full_path: `/${oldFullPathList.join('/')}`
    })
  }

  handle_click (index) {
    var clicked_ele = this.state.images[index]
    switch (clicked_ele.type) {
      case 'folder':
        this.handle_navigate(clicked_ele)
        break
      case 'file':
        this.handle_download(clicked_ele)
        break
      default:
        this.navigate_back()
    }
  }

  renderGallery (images) {
    return (
      <div>
        {this.state.full_path != '/' ? (
          <Breadcrumb className='black'>
            {this.state.full_path.split('/').reduce(function (acc, name) {
              return name == '/'
                ? acc
                : acc.concat([<MenuItem key={name}>{name}</MenuItem>])
            }, [])}
          </Breadcrumb>
        ) : (
          <Breadcrumb className='black'>
            <MenuItem>{''}</MenuItem>
          </Breadcrumb>
        )}
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

  render () {
    console.log('state in render method :............ ')
    console.log(JSON.stringify(this.state))
    var images = this.state.images
    if (images.length == 0) {
      this.updateState(this.state['full_path'])
    }
    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
        <Button onClick={this.props.reset}>ReSet</Button>
        <Button onClick={this.props.reset}>ReSet</Button>
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
          {images.length > 0 ? (
            this.renderGallery(images)
          ) : (
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
        </div>
      </div>
    )
  }
}

DashBoard.propTypes = {
  fetch: PropTypes.function,
  file: PropTypes.shape({
    fetched: PropTypes.shape({ fetched_paths: PropTypes.array.isRequired })
  })
}
