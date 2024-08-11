import React from 'react'

function Movie({title,image,description}) {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 py-4 '>
    <div className="card">
<img src= {image} className="card-img-top" alt= {title} />
<div className="card-body">
<h5 className="card-title">{title}</h5>
<p className="card-text textcard">
  {description}
</p>
</div>
</div>
</div>
  )
}

export default Movie