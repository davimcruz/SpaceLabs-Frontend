function CustomErrorPage({ statusCode }) {
  return (
    <div>
      {statusCode ? (
        <p>Ocorreu um erro no servidor: {statusCode}</p>
      ) : (
        <p>Ocorreu um erro na página</p>
      )}
    </div>
  );
}

export default CustomErrorPage;
