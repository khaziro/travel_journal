import React from "react";
import './location.component.css'
import {location_data} from "../location_data";

export default function Location() {
  const mappedData = location_data.map((location) => {
    return (
      <div key={location.id}
           className='location_container'>
        <div className="location_image">
          <img src={location.image_url}
               alt="location"/></div>
        <div className="location_details">
          <div className="location_details_top">
            <div className="location_details_top_location">
              <img src="/images/location_marker.svg"
                   alt="marker"/>
              <div className="location_town">{location.location.toUpperCase()}</div>
            </div>

            <div className="google_maps_link"><a href={location.google_maps_link}>View on Google Maps</a></div>
          </div>
          <div className="location_name">{location.title}</div>
          <div className="location_date">{location.start_date} - {location.end_date}</div>
          <div className="location_description">{location.description}</div>
        </div>
      </div>
    )
  })
  return (
    <div>{mappedData}</div>
  )
}