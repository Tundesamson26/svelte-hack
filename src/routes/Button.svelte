<script>
    function toggle() {
        window.document.body.classList.toggle('dark-mode')
    }
    </script>
    <button on:click={toggle}>
        <img src="/toggle.png" alt="">
        <!-- <slot/> -->
    </button>
    <style>
        button {
            background-color: #f76027;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 0.5rem;
            margin: 5px;
            text-transform: uppercase;
            
        }

        img{
            width: 16px;
        }
        :global(body.dark-mode) button {
            background-color: #0084f6;
            color: white;
        }
    </style>