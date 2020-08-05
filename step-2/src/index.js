console.log('index')

const xhr = new XMLHttpRequest()
xhr.open('GET','/api/user')
xhr.responseType = 'json'
xhr.onload = () => {
  console.log(xhr.response)
}
xhr.send()
