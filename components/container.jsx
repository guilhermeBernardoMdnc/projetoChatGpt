import './container.css';

function Container() {
  return (
    <div className="container">
  <div className="content">
    <h1 className='titulo'>Transforme seu corpo com a <span className='palavra-especial'>IronFit</span> </h1>
    <p>Alcance seu melhor físico com treinos personalizados e acompanhamento profissional.</p>
    <button>Comece Agora</button>
  </div>

  <div className="image">
    <img src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWNhZGVtaWF8ZW58MHwxfDB8fHww" alt="" />
  </div>
</div>

  );
}

export default Container;

