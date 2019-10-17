import React, { Component } from 'react'
import { Breadcrumb, MenuItem, Preloader, Button } from 'react-materialize'
import Gallery from 'react-grid-gallery'
// import PropTypes from 'prop-types'
import path from 'path'
import { isArray } from 'util'
import ViewPDF from '../components/PDFViewer'
// import Lightbox from 'react-image-lightbox'
import { Lightbox } from 'react-modal-image'
// import 'react-image-lightbox/style.css';

export default class DashBoard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fullPath: this.props.file['fullPath'],
      currentFolder: this.props.file['currentFolder']
    }
    this.handleClick = this.handleClick.bind(this)
  }

  createList (paths) {
    let that = this
    let all = []
    let add_back_button = path.dirname(this.state['fullPath']) != '.'

    if (add_back_button) {
      all.push({
        src: '',
        thumbnail:
          'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/links.png',
        thumbnailWidth: 10,
        thumbnailHeight: 10,
        tags: [{ value: 'back', title: 'Name' }]
      })
    }
    paths = isArray(paths) ? paths : paths.value
    return all.concat(
      paths.map(function (sth) {
        console.log(sth)
        var { name, ext } = path.parse(sth['name'])
        return {
          alt: sth._id,
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

  handleNavigate (ele) {
    let [{ value }] = ele.tags
    // let id = ele.alt
    var newFullPath = path.join(this.props.file.fullPath, value)
    this.state.currentFolder = value
    this.state.fullPath = newFullPath
    this.props.navigate(
      newFullPath,
      value,
      !this.props.file.fetched[newFullPath],
      'folder'
    )
  }

  navigateBack () {
    var oldFullPathList = this.state.fullPath.split('/')
    oldFullPathList.pop()
    var currentFolder = oldFullPathList[oldFullPathList.length - 1]
    this.state.currentFolder = currentFolder
    this.state.fullPath = oldFullPathList.join('/')
    this.props.navigate(
      oldFullPathList.join('/'),
      currentFolder,
      false,
      'folder'
    )
  }

  handleView (ele) {
    let fileWithExt = ele.tags[0]['value']
    let fullPath = this.props.file['fullPath']
    let newFullPath = path.join(fullPath, fileWithExt)

    if (!this.props.file['fetched'][newFullPath]) {
      return this.props.fetch(newFullPath)
    }
    let { status } = this.props.file.fetched[newFullPath]
    switch (status) {
      case 'Failed':
        alert('Failed To get File')
        break

      case 'Done':
        this.state.fullPath = newFullPath
        this.state.currentFolder = fileWithExt
        this.props.navigate(newFullPath, fileWithExt, false, 'file')
        break

      case 'Loading':
        alert('Loading File, this should never match ...')
        break

      default:
        break
    }
  }

  handleDownload (ele) {
    var name = ele.tags[0]['value']
    // TODO: change 'HI' for downloadable content
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

  handleClick (index) {
    let ele = this.state.images[index]
    console.log('handleClick')
    console.log(ele)
    switch (ele.type) {
      case 'folder':
        return this.handleNavigate(ele)

      case 'file':
        // this.handleDownload(ele)
        return this.handleView(ele)

      default:
        return this.navigateBack()
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
          onClickThumbnail={this.handleClick}
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

  renderList ({ currentFolder, fullPath, fetched }) {
    let current = fetched[fullPath] || {}
    return (
      <div>
        {current['status'] == 'Loading' && ''}
        {current['status'] == 'Done' && this.renderGallery(current['paths'])}
        {current['status'] == undefined && (
          <span>
            <Button
              onClick={function () {
                return this.props.navigate(fullPath, currentFolder, true)
              }.bind(this)}
            >
              Brows Colleges
            </Button>
          </span>
        )}
      </div>
    )
  }

  viewImage (filePath) {
    console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,')
    console.log(filePath)
    return (
      <Lightbox
        medium={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfSdorY_1cntjEmgEXNXEJwxGi-nsY9fwJJUgipn3mulH5mcs'
        }
        large={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmfSdorY_1cntjEmgEXNXEJwxGi-nsY9fwJJUgipn3mulH5mcs'
        }
        alt='Hello World!'
        onClose={this.navigateBack.bind(this)}
      />
    )
    // return (
    //   <Lightbox
    //     mainSrc={filePath}
    //     onCloseRequest={this.navigateBack.bind(this)}
    //     onMovePrevRequest={function () {}}
    //     onMoveNextRequest={function () {}}
    //     nextSrc={''}
    //     prevSrc={''}
    //   />
    // )
  }

  renderFile ({ currentFolder, fullPath, fetched }) {
    let { ext } = path.parse(currentFolder)
    let current = fetched[fullPath] || {}
    if (current['status'] == 'Loading') return ''
    switch (ext) {
      case '.pdf':
        console.log('redering PPPPPPPPPPPPPPPDDDDDDDDDDDDDFFFFFFFFFFFFFf')
        // return <span>{fetched[fullPath]['file'] || ''}</span>
        console.log(fetched[fullPath]['file'] || '')
        return <ViewPDF filepath={fetched[fullPath]['file'] || ''} />
      case '.txt':

      // return file.readFile(fetched[fullPath]['file'], function (err, res) {
      //   console.log('done reading file')
      // })
      default:
        return this.viewImage(fetched[fullPath]['file'])
    }
  }

  render () {
    console.log(this.props)
    console.log(this.state)
    let { type, fullPath, fetched } = this.props.file
    let current = fetched[fullPath] || {}

    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
        <Button onClick={this.props.reset}>Reload</Button>
        <div
          style={{
            display: 'block',
            minHeight: '1px',
            width: '80%',
            border: '5px solid #CCC',
            overflow: 'auto',
            margin: 'auto',
            background: '#EEE'
          }}
        >
          <Crumbs fullPath={fullPath} status={current['status']} />
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

          {type == 'folder' && this.renderList(this.props.file)}
          {type == 'file' && this.renderFile(this.props.file)}
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

function Crumbs ({ fullPath, status }) {
  const statuses = {
    Loading: 'Loading ...',
    Failed: 'Failed !!'
  }
  if (status == 'Done') {
    return (
      <Breadcrumb className='black'>
        {fullPath.split('/').reduce(function (acc, name) {
          return acc.concat([<MenuItem key={name}>{name}</MenuItem>])
        }, [])}
      </Breadcrumb>
    )
  } else {
    return (
      <Breadcrumb className='black'>
        <MenuItem>{statuses[status] || ''}</MenuItem>
      </Breadcrumb>
    )
  }
}
