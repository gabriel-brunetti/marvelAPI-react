  const publicKey = 'cbea2d04c5782aaafc323023acea74dd'
  const privateKey = 'ced775d6630c717b4fd6df6633c88184ea89e66b'
  const timestamp = Number(new Date())
  const hash = md5(timestamp + privateKey + publicKey)

<article>
  <div>
    <Get
      url='http://gateway.marvel.com/v1/public/characters'
      params={{ ts: timestamp, apikey: publicKey, hash: hash }}
    >
      {(error, response, isLoading, makeRequest, axios) => {
        if (error) {
          return (
            <div>
              Something bad happened: {error.message}{' '}
              <button onClick={() => makeRequest({ params: { reload: true } })}>
                Retry
              </button>
            </div>
          )
        } else if (isLoading) {
          return <div>Loading...</div>
        } else if (response !== null) {
          console.log(response)
          return (
            <div>
              <span>{response.data.data.results[0].name}</span>
              <img
                src={
                  response.data.data.results[0].thumbnail.path +
                  '/standard_fantastic.' +
                  response.data.data.results[0].thumbnail.extension
                }
                alt={response.data.data.results[0].name}
              />
              <button>
                {' '}
                <img src='assets/favorito_02.svg' alt='favoritar' />{' '}
              </button>
            </div>
          )
        }
        return <div>Default message before request is made.</div>
      }}
    </Get>
  </div>
</article>
