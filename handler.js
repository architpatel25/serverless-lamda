module.exports.hello = async (event) => {
  console.log('event :>> ', event);

  if (event.requestContext.http.method === 'POST') {
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Post Method Called Successfully...!',
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Get Method Called Successfully...!',
    }),
  };
};