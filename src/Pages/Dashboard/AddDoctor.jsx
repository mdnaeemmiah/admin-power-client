import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useAxiosSecure from "../../hook/useAxiosSecure"
import { imageUpload } from "../../utils"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"


const AddDoctor = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('Upload Image')

  const { mutateAsync } = useMutation({
    mutationFn: async doctorData => {
      const { data } = await axiosSecure.post(`/doctors`, doctorData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Doctor Added Successfully!')
      // navigate('/dashboard/my-listings')
      setLoading(false)
    },
  })


  //   Form handler
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const specialty = form.specialty.value
    const image = form.image.files[0]

    try {
      const image_url = await imageUpload(image)
      const doctorData = {
        name,
        email,
        specialty,
        image: image_url,
      }
      console.table(doctorData)

      //   Post request to server
      await mutateAsync(doctorData)
    } catch (err) {
      console.log(err)
      toast.error(err.message)
      setLoading(false)
    }
  }

  //   handle image change
  const handleImage = image => {
    setImagePreview(URL.createObjectURL(image))
    setImageText(image.name)
  }



  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='name'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Specialty
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='specialty'
              >
                <option disabled value="default">Select a category</option>
                <option value="salad">Cardiologist</option>
                <option value="pizza">Dermatologist</option>
                <option value="soup">Neurologist</option>
                <option value="dessert">Pediatrician</option>
                <option value="drinks">Oncologist</option>
                <option value="soup">Hematologist</option>
                <option value="dessert">Radiologist</option>
                <option value="drinks">Anesthesiologist</option>
              </select>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='email' className='block text-gray-600'>
                Email
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='email'
                id='email'
                type='text'
                placeholder='email'
                required
              />
            </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      onChange={e => handleImage(e.target.files[0])}
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      {/* {imageText} */}
                      {imageText.length > 20
                        ? imageText.split('.')[0].slice(0, 15) +
                        '....' +
                        imageText.split('.')[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className='h-16 w-16 object-cover overflow-hidden flex items-center'>
                {imagePreview && <img src={imagePreview} />}
              </div>
            </div>

          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default AddDoctor
