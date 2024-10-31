import transparent from "./img/transparent.png"
import footerBg from "./img/footerBg.png"
const Footer = () => {
  return (
    <div className="flex justify-around items-center bg-cover h-screen " style={{ backgroundImage: `url(${footerBg})` }}>
        <div>
            <img src={transparent} alt="logo" />
            <p className="w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 15.5C18.8 15.5 17.6 15.3 16.4 14.9C16.1 14.8 15.7 14.9 15.4 15.1L13.2 17.3C10.4 15.9 8.1 13.5 6.6 10.7L8.8 8.5C9.1 8.2 9.2 7.8 9 7.5C8.7 6.4 8.5 5.2 8.5 4C8.5 3.4 8.1 3 7.5 3H4C3.4 3 3 3.4 3 4C3 13.4 10.6 21 20 21C20.6 21 21 20.6 21 20V16.5C21 15.9 20.6 15.5 20 15.5ZM19 12H21C21 7 17 3 12 3V5C15.9 5 19 8.1 19 12ZM15 12H17C17 9.2 14.8 7 12 7V9C13.7 9 15 10.3 15 12Z" fill="white"/>
                </svg>
                <p>Phone: +1-543-123-4567</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H18V9.2L12 13L6 9.2V18H4V6H5.2L12 10.2L18.8 6H20V18Z" fill="white"/>
                </svg>
                <p>example@huddle.com</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.8 0H3.2C1.44 0 0 1.44 0 3.2V28.8C0 30.56 1.44 32 3.2 32H28.8C30.56 32 32 30.56 32 28.8V3.2C32 1.44 30.56 0 28.8 0ZM25.12 11.68C24.96 19.04 20.32 24.16 13.28 24.48C10.4 24.64 8.32 23.68 6.4 22.56C8.48 22.88 11.2 22.08 12.64 20.8C10.56 20.64 9.28 19.52 8.64 17.76C9.28 17.92 9.92 17.76 10.4 17.76C8.48 17.12 7.2 16 7.04 13.44C7.52 13.76 8.16 13.92 8.8 13.92C7.36 13.12 6.4 10.08 7.52 8.16C9.6 10.4 12.16 12.32 16.32 12.64C15.2 8.16 21.28 5.76 23.68 8.8C24.8 8.64 25.6 8.16 26.4 7.84C26.08 8.96 25.44 9.6 24.64 10.24C25.44 10.08 26.24 9.92 26.88 9.6C26.72 10.4 25.92 11.04 25.12 11.68Z" fill="white"/>
                </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M28.8 0H3.2C1.44 0 0 1.44 0 3.2V28.8C0 30.56 1.44 32 3.2 32H28.8C30.56 32 32 30.56 32 28.8V3.2C32 1.44 30.56 0 28.8 0ZM27.2 3.2V8H24C23.04 8 22.4 8.64 22.4 9.6V12.8H27.2V17.6H22.4V28.8H17.6V17.6H14.4V12.8H17.6V8.8C17.6 5.76 20.16 3.2 23.2 3.2H27.2Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M28.8 0H3.2C1.44 0 0 1.44 0 3.2V28.8C0 30.56 1.44 32 3.2 32H28.8C30.56 32 32 30.56 32 28.8V3.2C32 1.44 30.56 0 28.8 0ZM25.12 11.68C24.96 19.04 20.32 24.16 13.28 24.48C10.4 24.64 8.32 23.68 6.4 22.56C8.48 22.88 11.2 22.08 12.64 20.8C10.56 20.64 9.28 19.52 8.64 17.76C9.28 17.92 9.92 17.76 10.4 17.76C8.48 17.12 7.2 16 7.04 13.44C7.52 13.76 8.16 13.92 8.8 13.92C7.36 13.12 6.4 10.08 7.52 8.16C9.6 10.4 12.16 12.32 16.32 12.64C15.2 8.16 21.28 5.76 23.68 8.8C24.8 8.64 25.6 8.16 26.4 7.84C26.08 8.96 25.44 9.6 24.64 10.24C25.44 10.08 26.24 9.92 26.88 9.6C26.72 10.4 25.92 11.04 25.12 11.68Z" fill="white"/>
                </svg>
            </div>
        </div>
        <div>
            <h4>NEWSLETTER</h4>
            <p  className="w-[300px]">To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
            <div>
                <input type="text" />
                <button>submit</button>
            </div>
        </div>
    </div>
  )
}

export default Footer