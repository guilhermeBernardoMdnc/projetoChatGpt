import "./form.css";

function Form() {
  return (
    <section className="form-section">
      <h2>Fale com a gente</h2>
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
        />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          placeholder="Digite sua mensagem"
          rows="5"
          required
        ></textarea>

        <button type="submit" className="btn-2">Enviar</button>
      </form>
    </section>
  );
}

export default Form;
