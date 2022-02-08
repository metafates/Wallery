<template>
    <div class="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style scoped>
.loading {
    width: 60px;
    height: 60px;
    transform: rotate(45deg);
}
.loading div {
    width: 6px;
    height: 6px;
    background: #673ab7;
    border-radius: 100%;
    float: left;
    margin-bottom: 12px;
    animation: scaleDot 2s ease infinite;
}
.loading div:not(:nth-child(4n+4)) {
    margin-right: 12px;
}
.loading div:nth-child(1) {
    animation-delay: 0;
}
.loading div:nth-child(2),
.loading div:nth-child(5) {
    animation-delay: 0.1s;
}
.loading div:nth-child(3),
.loading div:nth-child(6),
.loading div:nth-child(9) {
    animation-delay: 0.2s;
}
.loading div:nth-child(4),
.loading div:nth-child(7),
.loading div:nth-child(10),
.loading div:nth-child(13) {
    animation-delay: 0.3s;
}
.loading div:nth-child(8),
.loading div:nth-child(11),
.loading div:nth-child(14) {
    animation-delay: 0.4s;
}
.loading div:nth-child(12),
.loading div:nth-child(15) {
    animation-delay: 0.5s;
}
.loading div:nth-child(16) {
    animation-delay: 0.6s;
}
@-moz-keyframes scaleDot {
    40% {
        transform: scale(1.3) translate(-2px, -2px);
    }
    80% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
}
@-webkit-keyframes scaleDot {
    40% {
        transform: scale(1.3) translate(-2px, -2px);
    }
    80% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
}
@-o-keyframes scaleDot {
    40% {
        transform: scale(1.3) translate(-2px, -2px);
    }
    80% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes scaleDot {
    40% {
        transform: scale(1.3) translate(-2px, -2px);
    }
    80% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
    }
}

</style>