import sytles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'

const SingleProductPage = () => {
    return(
        <div className={sytles.container}>
            <div className={sytles.infoContainer}>
                <div className={sytles.imageContainer}>
                    <img src='/noavatar.png' alt='fill'/>
                </div>
                Iphone
            </div>
            <div className={sytles.formContainer}>
                <form action='' className={sytles.form}>
                <label>Title</label>
                <input type='text' name='title' placeholder='John Doe'/>
                <label>Price</label>
                <input type='number' name='price' placeholder='johnDoe@gmail.com'/>
                <label>Stock</label>
                <input type='number' name='stock' placeholder='23' />
                <label>Color</label>
                <input type='text' name='color' placeholder='+red'/>
                <label>size</label>
                <textarea type='text' name='size' placeholder='New York'/>
                <label>Cat</label>
                <select name='cat' id='cat'>
                    <option value='kitchen'>Kitchen</option>
                    <option value='computers'>Computers</option>
                </select>
                <label>Description</label>
                <textarea name='desc' id='desc' rows="10" placeholder='description'/>
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage