DOM.insertAdjacentHTML(
  "beforeend",
  `


 <section class="h-screen flex flex-col items-center justify-center px-6 bg-indigo-950">

    <!-- Title with Horizontal Lines -->
    <div class="flex items-center w-full max-w-6xl">
        <div class="flex-grow border-t border-gray-400"></div>
       <h2 class="text-4xl font-bold bg-gradient-to-r from-gray-800 via-gray-300 to-gray-800 text-transparent bg-clip-text mx-6">
    Testimonies
      </h2>

        <div class="flex-grow border-t border-gray-400"></div>
    </div>

    <!-- Spacing Below Title -->
    <div class="mb-10"></div>

    <!-- Testimonies Image Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <!-- Image Card 1 -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img src="https://i.pinimg.com/736x/3a/ac/fa/3aacfa0b4a275b3c7394dff4ac93a6fc.jpg" alt="Testimony 1" class="w-full h-64 object-cover">
        </div>

        <!-- Image Card 2 -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img src="https://i.pinimg.com/736x/3a/ac/fa/3aacfa0b4a275b3c7394dff4ac93a6fc.jpg" alt="Testimony 2" class="w-full h-64 object-cover">
        </div>

        <!-- Image Card 3 -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <img src="https://i.pinimg.com/736x/3a/ac/fa/3aacfa0b4a275b3c7394dff4ac93a6fc.jpg" alt="Testimony 3" class="w-full h-64 object-cover">
        </div>
    </div>

    <!-- Small Paragraph Below -->
    <p class="text-gray-300 text-lg text-center max-w-4xl mt-6">
        Hear from those who have experienced our service firsthand. Their stories reflect the trust and satisfaction we've built over time, ensuring a seamless and reliable experience for all.
    </p>
</section>

<footer class="bg-indigo-950 text-gray-300 py-10 w-full">
    <div class="max-w-6xl mx-auto px-6 flex flex-col items-center">

        <!-- Title with Logo -->
        <div class="flex items-center space-x-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBy0SbvCQKjdIJUzRwCFCy1zi_h337WJUvwA&s" alt="Tech Executive Labs Logo" class="h-10">
            <h2 class="text-2xl font-bold text-white">Tech Executive Labs</h2>
        </div>

        <!-- Navigation Links -->
        <div class="flex justify-center space-x-8 mt-6">
            <a href="#" class="hover:text-gray-100">About</a>
            <a href="#" class="hover:text-gray-100">Careers</a>
            <a href="#" class="hover:text-gray-100">Data & Privacy Policy</a>
            <a href="#" class="hover:text-gray-100">Terms & Conditions</a>
        </div>

        <!-- Bottom Section -->
        <div class="w-full flex flex-col md:flex-row justify-between items-center mt-10 text-sm text-gray-500">

            <!-- Bottom Left: Developed by -->
            <div class="flex items-center space-x-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBy0SbvCQKjdIJUzRwCFCy1zi_h337WJUvwA&s" alt="Tech Executive Labs Logo" class="h-8">
                <p>Developed by Tech Executive Labs Solutions</p>
            </div>

            <!-- Bottom Center: Social Media Icons -->
            <div class="flex space-x-6 my-4 md:my-0">
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
            </div>

            <!-- Bottom Right: Designed by -->
            <div>
                <p>Designed by Lourenz</p>
            </div>

        </div>
    </div>
</footer>
`
);
