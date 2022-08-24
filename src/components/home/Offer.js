const Offer = ({ icon, heading, body }) => {
  return (
    <section className='border-t-8 border-t-primary rounded-md flex gap-x-4 shadow-md p-8'>
      <div className='text-4xl'>{icon}</div>
      <div>
        <h3 className='text-lg font-light mb-1'>{heading}</h3>
        <p className='font-extralight text-sm'>{body}</p>
      </div>
    </section>
  );
};

export default Offer;
