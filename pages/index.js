export default function Home() {
  const isServer = typeof window === 'undefined';
  const h1Styles = isServer ? {
    backgroundColor: 'black',
    color: 'white',
  } : {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black'
  }
  console.log('h1 styles', h1Styles);
  return (
    <div>
      <h1 className={isServer ? 'server' : 'client'} style={h1Styles}>
        {isServer ? 'server' : 'client'}
      </h1>
    </div>
  )
}

// Just forcing SSR
Home.getInitialProps = async () => {
  return new Promise(function(resolve) {
    resolve({ foo: 'bar' });
  })
}
