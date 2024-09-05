function openHerbPage(url) {
    window.location.href = url;
}
function threejsanimation(){
    const scene = new THREE.Scene();
    const pivot = new THREE.Object3D();
    scene.add(pivot);
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    document.getElementById('container').appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true; 
    scene.add(directionalLight);
    
    const planeGeometry = new THREE.PlaneGeometry(500, 500);
    const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.2 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true; // Enable shadow receiving
    scene.add(plane);
    
    // Load GLTF Model
    const loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function (gltf) {
        const model = gltf.scene;
        pivot.add(model);
        model.position.set(-0.7, 0, 0);
        pivot.position.set(0,0,0);
        model.scale.set(5, 5, 5); 
        // model.rotation.x = Math.PI/5;
        console.log(model);
        // model.rotation.y = Math.PI/2;
    });
    
    // OrbitControls for rotation, zoom, and pan
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.target = pivot.position;
    controls.enableDamping = true; // smooth motion
    controls.dampingFactor = 0.9;
    controls.screenSpacePanning = false;
    controls.minDistance = 1; // Minimum zoom
    controls.maxDistance = 1000; // Maximum zoom
    controls.maxPolarAngle = Math.PI *2; // Limit vertical rotation
    
    // Set camera position
    camera.position.set(0,0,0); // x=5, y=3, z=10

// Make the camera look at the origin
   camera.lookAt(-1, 0, 0);
    
    // Render Loop
    function animate() {
        requestAnimationFrame(animate);
    
        // model.rotation.y += 0.01; 
        controls.update();
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', function () {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
}
// page2 card formation 
let p2arr = [
    {
        image:"https://i.pinimg.com/564x/1e/ae/7b/1eae7b79c9d47d6ed74d2552a26dcc75.jpg",
        name:"Turmeric",
        p:"Anti-inflammatory and antioxidant powerhouse",
        main_name:"Turmeric: The Golden Spice of Wellness",
        main_p1:"Turmeric, the vibrant golden spice, has been revered for centuries in traditional medicine for its remarkable therapeutic properties. This versatile herb is a powerhouse of antioxidants and anti-inflammatory compounds, making it a natural choice for supporting overall health and wellbeing.",
        main_p2:"Renowned for its ability to alleviate inflammation, turmeric has been shown to be effective in managing a variety of conditions, from joint pain and arthritis to skin irritations and digestive issues. Its active compound, curcumin, has also been studied for its potential neuroprotective effects, making it a promising natural remedy for cognitive health.",
        main_p3:"Beyond its medicinal applications, turmeric has a rich culinary history, adding a vibrant hue and earthy flavor to a wide range of dishes. Incorporating this versatile herb into your daily routine, whether through supplements, teas, or culinary creations, can unlock a world of holistic benefits for your body and mind."
        ,gltf :"scene.gltf"
    },
    {
        image:"https://i.pinimg.com/564x/c7/5e/72/c75e72a78ec949e1d93d5bf16599db1b.jpg",
        name:"Ginger",
        p:"Digestive aid and anti-inflammatory",
        main_name:"Turmeric: The Golden Spice of Wellness",
        main_p1:"Turmeric, the vibrant golden spice, has been revered for centuries in traditional medicine for its remarkable therapeutic properties. This versatile herb is a powerhouse of antioxidants and anti-inflammatory compounds, making it a natural choice for supporting overall health and wellbeing.",
        main_p2:"Renowned for its ability to alleviate inflammation, turmeric has been shown to be effective in managing a variety of conditions, from joint pain and arthritis to skin irritations and digestive issues. Its active compound, curcumin, has also been studied for its potential neuroprotective effects, making it a promising natural remedy for cognitive health.",
        main_p3:"Beyond its medicinal applications, turmeric has a rich culinary history, adding a vibrant hue and earthy flavor to a wide range of dishes. Incorporating this versatile herb into your daily routine, whether through supplements, teas, or culinary creations, can unlock a world of holistic benefits for your body and mind."
        ,gltf :"scene.gltf"
    },
    {
        image:"https://i.pinimg.com/564x/02/48/c1/0248c10588f6e4ad82a3aab62189a0c8.jpg",
        name:"Chamomile",
        p:"Calming and sleep promoting",
        main_name:"Turmeric: The Golden Spice of Wellness",
        main_p1:"Turmeric, the vibrant golden spice, has been revered for centuries in traditional medicine for its remarkable therapeutic properties. This versatile herb is a powerhouse of antioxidants and anti-inflammatory compounds, making it a natural choice for supporting overall health and wellbeing.",
        main_p2:"Renowned for its ability to alleviate inflammation, turmeric has been shown to be effective in managing a variety of conditions, from joint pain and arthritis to skin irritations and digestive issues. Its active compound, curcumin, has also been studied for its potential neuroprotective effects, making it a promising natural remedy for cognitive health.",
        main_p3:"Beyond its medicinal applications, turmeric has a rich culinary history, adding a vibrant hue and earthy flavor to a wide range of dishes. Incorporating this versatile herb into your daily routine, whether through supplements, teas, or culinary creations, can unlock a world of holistic benefits for your body and mind."
        ,gltf :"scene.gltf"
    },
    {
        image:"https://i.pinimg.com/564x/40/01/76/4001761f94220b4f9bae946942bb2097.jpg",
        name:"Echinacea",
        p:"Immune-boosting and anti-inflammatory ",
        main_name:"Turmeric: The Golden Spice of Wellness",
        main_p1:"Turmeric, the vibrant golden spice, has been revered for centuries in traditional medicine for its remarkable therapeutic properties. This versatile herb is a powerhouse of antioxidants and anti-inflammatory compounds, making it a natural choice for supporting overall health and wellbeing.",
        main_p2:"Renowned for its ability to alleviate inflammation, turmeric has been shown to be effective in managing a variety of conditions, from joint pain and arthritis to skin irritations and digestive issues. Its active compound, curcumin, has also been studied for its potential neuroprotective effects, making it a promising natural remedy for cognitive health.",
        main_p3:"Beyond its medicinal applications, turmeric has a rich culinary history, adding a vibrant hue and earthy flavor to a wide range of dishes. Incorporating this versatile herb into your daily routine, whether through supplements, teas, or culinary creations, can unlock a world of holistic benefits for your body and mind."
        ,gltf :"scene.gltf"
    }
];
// console.log(p2arr[0].name)
function page2cards(){
    var clutter ="";
    p2arr.forEach(function(obj,index){
        clutter +=`<div data-index=${index} class = "p2cards"><div id="p2img">
        <img src="${obj.image}" alt=""></div>
        <div id="p2details"><h3>"${obj.name}"</h3>
        <p>"${obj.p}"</p>
        </div>
        </div>`
    });
    console.log(clutter);
    document.querySelector("#p2right").innerHTML=clutter;

}
function bigcard(){
    let big = document.querySelector("#bigcard");
    let card= document.querySelector("#p2right");
    card.addEventListener("click",function(dets){
        if(dets.target.classList.contains('p2cards')){
            console.log(dets.target.dataset.index);
            let index=dets.target.dataset.index;
            big.style.display = "flex";
            let html = ` <div id="left">
                <h1>${p2arr[index].main_name}</h1>
                <p>${p2arr[index].main_p1}</p>
                <p>${p2arr[index].main_p2}</p>
                <p>${p2arr[index].main_p3}</p>
                <button id="button_3d">View 3D Model</button>
                <button id="add" >Add to Cart</button>
            </div>
            <div id="right">
            <i class="ri-close-circle-line"></i>
                <img src="${p2arr[index].image}" alt="">
            </div>` ;
            big.innerHTML = html;
    document.querySelector("#bigcard #right i").addEventListener("click",function(){
        big.style.display = "none";
    })
    let renderer, scene, camera, pivot, controls;

    document.querySelector("#button_3d").addEventListener("click", function() {
        document.querySelector("#contains").style.display = "block";
        document.querySelector("#contain").style.display = "block";
    
        // If the renderer already exists, clear the scene
        if (renderer) {
            scene.clear();
        } else {
            // Create the scene, camera, and renderer once
            scene = new THREE.Scene();
            pivot = new THREE.Object3D();
            scene.add(pivot);
            scene.background = new THREE.Color(0xffffff);
    
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            document.getElementById('contain').appendChild(renderer.domElement);
    
            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
            scene.add(ambientLight);
    
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 10, 7.5);
            directionalLight.castShadow = true;
            scene.add(directionalLight);
    
            const planeGeometry = new THREE.PlaneGeometry(500, 500);
            const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.2 });
            const plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.rotation.x = -Math.PI / 2;
            plane.position.y = -1;
            plane.receiveShadow = true;
            scene.add(plane);
    
            // OrbitControls for rotation, zoom, and pan
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.target = pivot.position;
            controls.enableDamping = true;
            controls.dampingFactor = 0.9;
            controls.screenSpacePanning = false;
            controls.minDistance = 1; // Minimum zoom
            controls.maxDistance = 1000; // Maximum zoom
            controls.maxPolarAngle = Math.PI * 2; // Limit vertical rotation
    
            // Set camera position
            camera.position.set(0, 0, 10);
            camera.lookAt(0, 0, 0);
    
            // Handle window resize
            window.addEventListener('resize', function() {
                const width = window.innerWidth;
                const height = window.innerHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            });
        }
    
        // Load GLTF Model
        const loader = new THREE.GLTFLoader();
        loader.load(p2arr[index].gltf, function(gltf) {
            const model = gltf.scene;
            pivot.add(model);
            model.position.set(0, 0, 0);
            model.scale.set(5, 5, 5);
        });
    
        // Render Loop
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
    
        animate();
    
        document.querySelector("#contains i").addEventListener("click", function() {
            document.querySelector("#contains").style.display = "none";
        });
    });
    


        }

    })
}
bigcard();
page2cards();
threejsanimation();