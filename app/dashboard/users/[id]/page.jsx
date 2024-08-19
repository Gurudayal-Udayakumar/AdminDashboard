import sytles from '@/app/ui/dashboard/users/SingleUser/singleUser.module.css'

const SingleUserPage = () => {
    return(
        <div className={sytles.container}>
            <div className={sytles.infoContainer}>
                <div className={sytles.imageContainer}>
                    <img src='/noavatar.png' alt='fill'/>
                </div>
                John Doe
            </div>
            <div className={sytles.formContainer}>
                <form action='' className={sytles.form}>
                <label>Username</label>
                <input type='text' name='username' placeholder='John Doe'/>
                <label>Email</label>
                <input type='email' name='email' placeholder='johnDoe@gmail.com'/>
                <label>Password</label>
                <input type='password' name='password' />
                <label>Phone</label>
                <input type='text' name='phone' placeholder='+123456'/>
                <label>Address</label>
                <textarea type='text' name='address' placeholder='New York'/>
                <label>Is Admin?</label>
                <select name='isAdmin' id='isAdmin'>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <label>Is Active?</label>
                <select name='isAdmin' id='isAdmin'>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage