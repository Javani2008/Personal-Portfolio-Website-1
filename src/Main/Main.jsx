import './Main.css'
function Main() {
    return (
        <div>
            <section>
                <img className='logo' src="download.jpg" alt="" />
                <matn className='Matn'>
                    <h1><span>Hi, I'm </span>Amir Mahdi</h1>
                    <h2><span>I'm</span> programmer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo debitis cumque numquam ut magnam natus non, nihil vero dicta eaque ex quas! Mollitia exercitationem soluta inventore cupiditate amet aut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae expedita tempora sit in? Molestiae expedita officia, optio labore obcaecati quam distinctio odio aperiam porro? Quasi itaque placeat quo ratione expedita!</p>
                    <btn>
                        <button className='btnProject'>My Project</button>
                        <button className='btnContact'>Contact</button>
                    </btn>
                </matn>
                <btn>
                </btn>
            </section>
        </div>
    )
}
export default Main