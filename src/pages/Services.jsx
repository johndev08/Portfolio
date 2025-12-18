function Services() {
    const digitalservices = [
        {
            title: "Web Development",
            description: "Building responsive and modern websites tailored to your needs using the latest technologies.",
            
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and engaging user interfaces to enhance user experience across all devices."
        },
        {
            title: "Portfolio Sites",
            description: "Designing and developing personal portfolio websites to showcase your skills and projects effectively."
        },
        {
            title: "Consultation",
            description: "Providing expert advice on web development best practices, technologies, and project planning."
        }
    ];

    const technicalservices = [
        {
            title:"It support & troubleshooting",
            description: "Offering technical support and troubleshooting services to resolve IT-related issues efficiently."
        },
        {
            title: "system installation & configuration",
            description: "Assisting with the installation and configuration of software systems to ensure optimal performance."
        },
        {
            title: "Hardware upgrade",
            description: "Providing hardware upgrade services to enhance system performance and extend the lifespan of your devices."
        },
        {
            title: "network configuration",
            description: "Setting up and configuring network systems to ensure secure and reliable connectivity."
        },
        {
            title: " mobile device support",
            description: "Offering support for mobile devices, repair, including troubleshooting, configuration, and optimization."
        }

    ];

    return (
        <section id="services" className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
            <div className="max-w-4xl w-full">
                <h2 data-aos="fade-up" className="text-5xl font-bold mb-2 text-center text-gray-900">Services</h2>
                <div data-aos="fade-up" className="h-0.5 w-50 bg-blue-800 mx-auto mb-8 rounded-full"></div>
                <p data-aos="fade-up" className="text-center text-gray-500 mb-16 text-base">What I can help you with</p>
                
                <div className="mb-16">
                    <h3 data-aos="fade-up" className="text-2xl font-semibold mb-8 text-gray-900">Digital Services</h3>
                    <div data-aos="fade-up" className="grid gap-6 sm:grid-cols-2">
                        {digitalservices.map((service, index) => (
                            <div 
                                key={index} 
                                className="p-6 border border-gray-200 rounded-lg hover:border-blue-800 hover:bg-blue-50 transition duration-300"
                            >
                                <h4 className="text-lg font-semibold mb-2 text-gray-900 capitalize">{service.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 data-aos="fade-up" className="text-2xl font-semibold mb-8 text-gray-900">Technical Services</h3>
                    <div data-aos="fade-up" className="grid gap-6 sm:grid-cols-2">
                        {technicalservices.map((service, index) => (
                            <div 
                                key={index} 
                                className="p-6 border border-gray-200 rounded-lg hover:border-blue-800 hover:bg-blue-50 transition duration-300"
                            >
                                <h4 className="text-lg font-semibold mb-2 text-gray-900 capitalize">{service.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;