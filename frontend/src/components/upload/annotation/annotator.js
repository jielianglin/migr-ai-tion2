import React, { Component } from "react";
import * as markerjs2 from "markerjs2";
import Sample from "./sample/Sample.jpg";

class Annotator extends Component {
  imgRef = React.createRef(<img src={Sample} alt="sample" />);

  showMarkerArea() {
    if (this.imgRef.current !== null) {
      // create a marker.js MarkerArea
      const markerArea = new markerjs2.MarkerArea(this.imgRef.current);
      // attach an event handler to assign annotated image back to our image element
      markerArea.addRenderEventListener((dataUrl) => {
        if (this.imgRef.current) {
          this.imgRef.current.src = dataUrl;
        }
      });
      // launch marker.js
      markerArea.show();
    }
  }

  render() {
    return (
      <div className="Annotator">
        <img
          ref={this.imgRef}
          src={Sample}
          alt="sample"
          style={{ maxWidth: "50%" }}
          onClick={() => this.showMarkerArea()}
        />
      </div>
    );
  }
}

export default Annotator;
