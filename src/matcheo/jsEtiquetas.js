function poronga(){
    const searchInput = document.querySelector("[data-search]")
  searchInput.addEventListener('input', (e) =>{
    const value = e.target.value
    console.log(value)
  })
}
export default poronga;
