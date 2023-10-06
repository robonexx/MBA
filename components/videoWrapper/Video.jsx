const Video = ({ url }) => {
  return (
    <div className='overflow-hidden rounded-b-md border-t-0 border-neutral-300 md:rounded-b-xl md:border'>
      <video src={url} playsInline autoPlay muted loop></video>
    </div>
  );
};

export default Video;
