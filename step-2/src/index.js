console.log('index')

const xhr = new XMLHttpRequest()
xhr.open('GET','/user')
xhr.responseType = 'json'
xhr.onload = () => {
  console.log(xhr.response)
}
xhr.send()
