const ProjectGallery = ({ setOpenModal, gallery }) => {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className='body'>{gallery}</div>
      </div>
    </div>
  );
};

export default ProjectGallery;
