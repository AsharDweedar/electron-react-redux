import React, { Component } from 'react'
import { Breadcrumb, MenuItem, Preloader, Button } from 'react-materialize'
import Gallery from 'react-grid-gallery'
import PropTypes from 'prop-types'
import path from 'path'


export default class DashBoard extends Component {
  constructor(props) {
    super(props)
    console.log(".............DashBoard..........................")
    console.log(props)

    var fetched = this.props["file"]["fetched"]
    this.state = {
      images: [this.createList(fetched[""], false)],
      fetched: (fetched || {}),
      full_path: ''
    }
    this.handle_click = this.handle_click.bind(this)
  }

  createList(paths, add_back_button = true) {
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
    return back.concat(
      paths.map(function ({ key }) {
        var { name, ext } = path.parse(key)
        return {
          src: '', // thumbnailCaption: "this is " + ext,
          // customOverlay: ext == '' ? 'open' : 'download',
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

  get_content(new_path) {
    var old = this.state.fetched[new_path]
    if (old) {
      return this.createList(old, true)
    } else {
      var { fetched } = this.createList(this.props.fetch(new_path), true)
      this.state.fetched[new_path] = fetched
      return fetched
    }
  }
  handle_navigate(ele) {
    var new_path = ele.tags[0].value
    var new_list = this.get_content(new_path)
    this.setState({
      ...this.state,
      images: [...this.state.images, new_list],
      full_path: `${this.state.full_path}/${new_path}`
    })
  }
  handle_download(ele) {
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
  navigate_back() {
    if (this.state.images.length == 1) {
      console.log("can't go back more")
    } else {
      var oldFullPathList = this.state.full_path.split('/')
      oldFullPathList.pop()
      var newFullPath = oldFullPathList.join('/')
      this.state.images.pop()
      this.setState({
        ...this.state,
        full_path: newFullPath
      })
    }
  }

  handle_click(index) {
    var clicked_ele = this.state.images[this.state.images.length - 1][index]
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
  
  renderGallery(images) {
    return <div>
      {this.state.full_path != '' ? (
        <Breadcrumb className='black'>
          {this.state.full_path.split('/').reduce(function (acc, name) {
            return name == ''
              ? acc
              : acc.concat([<MenuItem key={name}>{name}</MenuItem>])
          }, [])}
        </Breadcrumb>
      ) : (
          <Breadcrumb className='black'>
            <MenuItem>{''}</MenuItem>
          </Breadcrumb>
        )}
      < Gallery
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
  }
  render() {
    var images = this.state.images[this.state.images.length - 1]
  
    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
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
          {images.length > 0 ? this.renderGallery(images) : <span style={{ border: '1px solid red', display: 'inline-block', margin: 'auto', width: '30%' }}><Preloader size='big' /></span>}
        </div>
      </div>
    )
  }
}

DashBoard.propTypes = {
  file: PropTypes.shape({ fetch: PropTypes.function })
}
