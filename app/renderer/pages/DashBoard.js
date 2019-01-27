import React, { Component } from 'react'
import { Card, CardTitle } from 'react-materialize'
import Gallery from 'react-grid-gallery'
import PropTypes from 'prop-types'

export default class DashBoard extends Component {
  render () {
    return (
      <div>
        <h2>Logged in as {this.props.user.username}</h2>
        <Demo3 />
      </div>
    )
  }
}
class Demo3 extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      images: this.props.images
    }
  }

  render () {
    return (
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
        <Gallery
          images={this.state.images}
          enableLightbox={false}
          enableImageSelection={false}
          margin={15}
          rowHeight={80}
          onClickThumbnail={() => "HI"}
        />
      </div>
    )
  }
}

Demo3.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.string,
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.required,
          title: PropTypes.string
        })
      )
    })
  ).isRequired
}

Demo3.defaultProps = {
  images: [
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/links.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'back', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    },
    {
      src: '',
      thumbnail:
        'https://cdn0.iconfinder.com/data/icons/sharp_folder_icons_by_folksnet/512/live_folder.png',
      thumbnailWidth: 10,
      thumbnailHeight: 10,
      tags: [{ value: 'folder_name', title: 'Name' }]
    }
  ]
}
