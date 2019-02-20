import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'

export default class ViewPDF extends Component {
  constructor(props) {
    super(props)
    console.log("constructor ///////")
    this.state = {
      filepath: props.filepath,
      numPages: null,
      pageNumber: 1
    }

  }

  onDocumentLoad () {}
  render () {
    const { pageNumber, numPages, filepath } = this.state
    console.log("pageNumber", pageNumber)
    console.log("numPages", numPages)
    console.log("filepath", filepath)

    return (
      <div>
        <h2>view PDF</h2>
        <Document file={filepath} onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    )
  }
}
