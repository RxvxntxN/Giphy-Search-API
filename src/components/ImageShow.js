function ImageShow({giff}) {
  return <div>

    <img src={giff.images.original.url} alt={giff.title} />

  </div>;
}

export default ImageShow;
