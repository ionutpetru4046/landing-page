import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
            What people are saying
            </h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                            <p>{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Testimonials
