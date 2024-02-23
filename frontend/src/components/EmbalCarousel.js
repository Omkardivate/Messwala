import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import EmblaCss from "../utils/EmblaCss.css"
export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla_container">
        <div className="embla_slide">
          <img src="https://imgs.search.brave.com/jrLHcvWl32ZQTg8l29Pn-_HcPZ9Tk6CNG8evUSxaZI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/OTk2NDMzOS9waG90/by9yYWptYS1jaGF3/YWwtYW4taW5kaWFu/LWZvb2QuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTE2akdX/TVlEdlJWeVRJT3Yt/eEJqSF9KVG9jdHdJ/amlfYm9tdzJubF9K/Y0U9" />
        </div>
        <div className="embla_slide">
          <img src="https://imgs.search.brave.com/zvjYCrrA3E53SZGk7AtvrpHiJlBn_1dZJZCzw50gab8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzE3Lzk2Lzg5/LzM2MF9GXzUxNzk2/ODk4OF9oRkhqUVQ2/Rmxma3NqeDhuMEt4/ZnZNdFAydHFsbUdL/ay5qcGc" />
        </div>
        <div className="embla_slide">
          <img src="https://imgs.search.brave.com/JbJXxyIomt2jurG31TzYCQaD3dXKqb-TNgle-vcDBpk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/ODU3ODg3NC9waG90/by9pbmRpYW4taGlu/ZHUtdmVnLXRoYWxp/LWZvb2QtcGxhdHRl/ci1zZWxlY3RpdmUt/Zm9jdXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVpIQXNK/OXNKSm9lQW13RDNp/VTFPbzJZU0tuX0JH/NkpvRTd6dUcxZnJ4/d2c9" />
        </div>
        <div className="embla_slide">
          <img src="https://imgs.search.brave.com/py-sbImuLZWpvR-f6IIZ2rOyYKdv159kWd8SKNk1Ct8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTMyODkx/NC81NDIzL2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQyMzUxNTUt/c3RvY2stcGhvdG8t/c2FhZy1wYW5lZXIt/Y3VycnktZGlzaC5q/cGc" />
        </div>
        <div className="embla_slide">
          <img src="https://imgs.search.brave.com/sNMr1aYoN6mGCI6MlmhRcAc1JUIgsIZ7ZM46BzVAGec/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTA4NjYz/MTAvNjU4MjkvaS80/NTAvZGVwb3NpdHBo/b3Rvc182NTgyOTQ4/Mjgtc3RvY2stcGhv/dG8tdHJhZGl0aW9u/YWwtaW5kaWFuLWN1/aXNpbmUtYXNzb3J0/ZWQtaW5kaWFuLmpw/Zw" />
        </div>
      </div>
    </div>
  )
}
