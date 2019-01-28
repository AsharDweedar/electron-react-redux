import React, { Component } from 'react'
import { Breadcrumb, MenuItem, Preloader } from 'react-materialize'
import Gallery from 'react-grid-gallery'
import PropTypes from 'prop-types'
import path from 'path'

const ext_to_icon = {
  '.pptx':
    'https://www.freeiconspng.com/uploads/powerpoint-icon-microsoft-powerpoint-icon-network-powerpoint-icons-and-3.png',
  '.ppt':
    'https://www.freeiconspng.com/uploads/powerpoint-icon-microsoft-powerpoint-icon-network-powerpoint-icons-and-3.png',
  '.docx':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MS_word_DOC_icon.svg/2000px-MS_word_DOC_icon.svg.png',
  '.doc':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MS_word_DOC_icon.svg/2000px-MS_word_DOC_icon.svg.png',
  '.txt':
    'https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-6/512/12-512.png',
  '.pdf':
    'https://www.codot.gov/business/civilrights/ada/assets/adobe-pdf-icon.png/image_preview',
  '.jpg':
    'https://cdn2.iconfinder.com/data/icons/plump-by-zerode_/256/Filetype-jpg-icon.png',
  '.jpeg':
    'https://cdn2.iconfinder.com/data/icons/plump-by-zerode_/256/Filetype-jpg-icon.png',
  '.png': 'https://www.ggf.org.uk/wp-content/uploads/2018/03/png-icon.png',
  '':
    'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png'
}

export default class DashBoard extends Component {
  constructor(props) {
    super(props)
    console.log(".......................................")
    console.log(props)

    var fetched = this.props.fetched

    console.log("fetched")
    console.log(fetched)
    this.state = {
      images: [this.createList(fetched, false)],
      fetched: {},
      full_path: 'Colleges'
    }
    this.handle_click = this.handle_click.bind(this)
  }

  createList(paths, add_back_button = true) {
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
            ext_to_icon[ext] ||
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
      return old
    } else {
      var { fetched } = this.createList(this.props.fetch(new_path), true)
      this.state.fetched[new_path] = fetched
      return fetched
    }
  }
  handle_navigate(ele) {
    console.log('handle_navigate')
    console.log(ele)
    var new_path = ele.tags[0].value

    var new_list = this.get_content(new_path)
    this.setState({
      ...this.state,
      images: [...this.state.images, new_list],
      full_path: `${this.state.full_path}/${new_path}`
    })
  }
  handle_download(ele) {
    console.log('handle_download')
    console.log(ele)
    console.log('downloading')
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
    console.log('navigate_back')
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
  fetchData(path) {
    // setTimeout(function () {
    //   var fetched = this.props.fetch(path)
    //   console.log("**********************************")
    //   console.log("**********************************")
    //   console.log("**********************************")
    //   console.log(fetched)
    // }.bind(this), 5)
    
  }
  renderGallery(images) {
    return <div>
      {this.state.full_path != '' ? (
        <Breadcrumb className='black'>
          {this.state.full_path.split('/').reduce(function (acc, name) {
            // return acc.concat([<MenuItem key={name}>{name}</MenuItem>])
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
    console.log(this.state)
    var images = this.state.images[this.state.images.length - 1]
    console.log("images", JSON.stringify(images))
    if(images.length == 0 ) {
      this.fetchData("")
    }
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
