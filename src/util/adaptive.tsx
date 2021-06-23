const adaptive = (size:number, width = 1440) => {
   return `${(size / width) * 100}vw`;
}

export default adaptive;
