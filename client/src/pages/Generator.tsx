import Title from "../components/Title"

const Generator = () => {
  return (
    <div className="min-h-screen text-white p-6 md:p-12 mt-28">
        <form className="max-w-4xl mx-auto mb-40">
            <Title heading="Create In-Context Image" description="Upload your model and product images to generate UGC"/>
            <div>
                left col
            </div>
            <div>
                Right col
            </div>
        </form>
    </div>
  )
}

export default Generator