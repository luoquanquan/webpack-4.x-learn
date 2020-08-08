const btn = document.getElementById('app')
btn.onclick = () => {
  import(/* webpackChunkName: 'ext' */ './ext').then(resp => {
    console.log(resp)
  })
}
