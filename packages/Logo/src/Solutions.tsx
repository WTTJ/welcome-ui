import React, { forwardRef } from 'react'
import { useTheme } from '@xstyled/styled-components'

import * as S from './styles'

import { LogoProps } from '.'

export const Solutions = forwardRef<'svg', LogoProps>((props, ref) => {
  const theme = useTheme()

  return (
    <S.Svg role="img" {...props} ref={ref} viewBox="0 0 100 39">
      <title>Welcome to the jungle solutions logo</title>
      <path
        d="M32.824 13.695c3.446 0 4.839-2.897 4.986-4.052.018-.166-.129-.22-.22-.055a3.528 3.528 0 0 1-3.08 1.687c-1.54 0-2.51-.825-2.932-2.09.201.019.403.036.66.036 3.004 0 5.003-1.246 5.003-3.043 0-1.614-1.594-2.75-3.83-2.75-3.28 0-5.389 2.09-5.389 5.243 0 3.153 1.961 5.024 4.802 5.024Zm.313-9.698c.513 0 .842.513.842 1.577 0 1.797-.898 2.915-2.492 3.264a5.376 5.376 0 0 1-.147-1.246c0-1.578.531-3.594 1.797-3.594v-.001Z"
        fill={theme.colors['neutral-90']}
      />
      <path
        d="M37.663 1.65c.531.624.86 1.375.86 2.31967c0 .826-.218 1.522-.604 2.273-.036.074 0 .129.074.129h4.435c.073 0 .11-.055.073-.129-.33-.66-.605-1.484-.605-2.272V1.412c0-.734.074-1.192.074-1.302 0-.074-.036-.11-.11-.11-.055 0-.128.017-.312.073l-4.032 1.173c-.073.019-.092.11-.036.166l.183.238ZM47.725 13.695c2.756 0 4.156-1.914 4.663-3.251.537 1.783 2.02 3.25 5.034 3.25 3.013 0 5.094-2.273 5.094-5.39 0-2.64-1.74-4.876-5.186-4.876-2.988 0-5.187 2.237-5.187 5.28 0 .39.034.78.105 1.162a3.51 3.51 0 0 1-2.855 1.405c-2.071 0-3.135-1.559-3.135-3.722 0-1.504.513-3.557 1.631-3.557.916 0 1.21 1.43.843 3.209-.055.256.017.293.147.256l2.675-.79c.404-.127.44-.476.202-.915-.935-1.632-2.218-2.328-3.813-2.328-2.694 0-5.004 1.888-5.004 5.243 0 3.006 1.925 5.024 4.784 5.024h.002Zm9.366-9.698c1.026-.055 1.54 1.503 1.705 4.492.146 2.97-.202 4.583-1.229 4.638-1.026.055-1.52-1.521-1.686-4.51-.147-2.97.183-4.565 1.21-4.62ZM83.356 13.695c3.445 0 4.838-2.897 4.985-4.052.018-.166-.128-.22-.22-.055a3.528 3.528 0 0 1-3.08 1.687c-1.54 0-2.51-.825-2.932-2.09.201.019.403.036.66.036 3.005 0 5.003-1.246 5.003-3.043 0-1.614-1.594-2.75-3.83-2.75-3.28 0-5.389 2.09-5.389 5.243 0 3.153 1.962 5.024 4.803 5.024Zm.312-9.698c.513 0 .842.513.842 1.577 0 1.797-.898 2.915-2.492 3.264a5.376 5.376 0 0 1-.147-1.246c0-1.578.531-3.594 1.797-3.594v-.001ZM67.41 13.328c.073 0 .11-.055.073-.129-.33-.64-.531-1.485-.531-2.273V7.461c0-1.283.421-1.998 1.08-1.998.514 0 .862.513.862 1.374v4.09c0 .825-.183 1.52-.531 2.272-.036.074 0 .129.073.129h4.288c.074 0 .111-.055.074-.129-.294-.66-.532-1.485-.532-2.273V7.461c0-1.283.422-1.998 1.082-1.998.513 0 .861.513.861 1.374v4.09a4.87 4.87 0 0 1-.531 2.272c-.038.074 0 .129.073.129h4.288c.074 0 .11-.055.074-.129-.33-.64-.531-1.485-.531-2.273V6.728c0-2.071-.918-3.3-2.438-3.3-1.265 0-2.346.825-2.932 2.273h-.038c-.256-1.449-1.1-2.273-2.345-2.273-1.246 0-2.346.825-2.932 2.273.017-.935.055-1.796.055-2.163 0-.074-.037-.11-.11-.11-.055 0-.128.018-.312.073l-3.446.954c-.074.019-.092.11-.037.165.22.257.531.696.531 1.851v4.455c0 .826-.183 1.54-.605 2.273-.036.074 0 .129.074.129h4.362ZM99.687 23.91a3.527 3.527 0 0 1-3.078 1.687c-1.54 0-2.512-.826-2.932-2.09.201.018.403.037.66.037 3.004 0 5.003-1.247 5.003-3.043 0-1.614-1.594-2.75-3.83-2.75-3.282 0-5.389 2.09-5.389 5.243 0 3.153 1.962 5.024 4.803 5.024 3.445 0 4.838-2.897 4.985-4.052.017-.166-.129-.22-.22-.055l-.002-.001Zm-6.25-1.998c0-1.577.532-3.593 1.798-3.593.512 0 .842.512.842 1.577 0 1.796-.898 2.915-2.492 3.263a5.378 5.378 0 0 1-.147-1.247ZM70.893 21.27v3.978c0 .825-.22 1.522-.605 2.274-.036.074 0 .128.073.128h4.435c.074 0 .111-.054.074-.128-.33-.66-.605-1.485-.605-2.274V21.16c0-2.182-.917-3.41-2.547-3.41-1.375 0-2.457.825-3.043 2.274.019-.935.055-1.797.055-2.164 0-.073-.036-.11-.11-.11-.055 0-.128.018-.312.073l-3.446.954c-.073.017-.092.11-.036.165.22.257.531.697.531 1.851v4.455c0 .825-.183 1.54-.604 2.274-.037.074 0 .128.073.128h4.435c.074 0 .11-.054.074-.128a4.789 4.789 0 0 1-.605-2.274v-3.355c0-1.392.422-2.108 1.19-2.108.624 0 .973.513.973 1.485ZM82.311 26.366H78.94c-.806 0-1.264-.256-1.264-.733 0-.22.073-.44.183-.605.568.183 1.246.275 2.053.275 2.585 0 4.454-1.687 4.454-3.96 0-1.338-.715-2.529-2.144-3.153h2.437c.074 0 .11-.036.11-.11 0-.715-.935-1.65-1.302-1.65a.357.357 0 0 0-.183.055c-.458.256-1.026.752-1.594 1.504a7.08 7.08 0 0 0-1.851-.24c-2.621 0-4.545 1.651-4.545 3.887 0 1.283.586 2.604 2.18 3.264-1.302.347-2.144 1.246-2.144 2.2 0 .787.422 1.373 1.21 1.703-.77.569-1.155 1.229-1.155 1.797 0 .954 1.045 1.578 2.492 1.578 2.493 0 7.001-1.87 7.001-4.07 0-1.119-.915-1.742-2.566-1.742Zm-2.694-8.049c.825-.054 1.302 1.063 1.43 3.153.128 2.036-.165 3.227-1.008 3.264-.77.019-1.302-.972-1.43-3.172-.128-2.09.22-3.207 1.008-3.245Zm.807 12.576c-1.302 0-2.97-.366-3.703-2.016.422.146.954.219 1.558.219h2.804c.899 0 1.32.256 1.32.77 0 .605-.807 1.027-1.98 1.027ZM32.201 27.521c-.037.073 0 .128.073.128h4.435c.074 0 .111-.055.074-.128-.33-.66-.605-1.485-.605-2.274v-4.088c0-2.182-.917-3.41-2.547-3.41-1.338 0-2.383.77-2.988 2.144v-4.16c0-.734.073-1.192.073-1.303 0-.073-.037-.11-.11-.11-.055 0-.129.02-.312.074l-4.031 1.174c-.074.018-.093.11-.037.165l.183.238c.532.624.862 1.375.862 2.31966c0 .825-.22 1.522-.605 2.274-.036.073 0 .128.073.128h4.435c.074 0 .11-.055.074-.128-.33-.66-.605-1.485-.605-2.274v-3.355c0-1.393.422-2.108 1.19-2.108.624 0 .973.513.973 1.485v3.978c0 .825-.22 1.522-.605 2.274ZM46.314 20.5c0-1.614-1.594-2.75-3.83-2.75-3.28 0-5.389 2.09-5.389 5.243 0 3.153 1.962 5.023 4.801 5.023 3.446 0 4.839-2.896 4.986-4.051.018-.166-.129-.22-.22-.055a3.527 3.527 0 0 1-3.08 1.687c-1.539 0-2.51-.826-2.933-2.09.202.018.404.037.66.037 3.005 0 5.004-1.247 5.004-3.043l.001-.002Zm-5.755 2.658a5.377 5.377 0 0 1-.147-1.247c0-1.577.531-3.594 1.797-3.594.512 0 .842.513.842 1.578 0 1.796-.898 2.915-2.492 3.263ZM47.231 29.519c-.147.073-.11.202.036.238.074.018.257.037.44.037 3.667 0 5.353-1.54 5.353-4.95V17.07c0-.916.33-1.411.752-1.833.054-.055.054-.166-.055-.166H48.88c-.11 0-.11.11-.055.166.422.422.752.917.752 1.833v8.654c0 1.797-.843 3.153-2.346 3.795ZM60.464 27.65h3.74c.073 0 .11-.055.073-.129-.33-.66-.605-1.485-.605-2.274v-7.388c0-.073-.036-.11-.11-.11-.054 0-.127.018-.311.073l-3.446.954c-.074.017-.091.11-.036.165.239.238.531.697.531 1.851v3.08c0 1.394-.422 2.108-1.191 2.108-.623 0-.972-.513-.972-1.485V17.86c0-.073-.036-.11-.11-.11-.055 0-.129.018-.312.073l-3.446.954c-.073.017-.091.11-.036.165.238.238.532.697.532 1.851v3.814c0 2.182.917 3.41 2.547 3.41 1.375 0 2.457-.825 3.043-2.272v1.796c0 .073.037.11.11.11Z"
        fill={theme.colors['neutral-90']}
      />
      <path
        d="M26.355 26.238c.037-.092.037-.183-.055-.183-.036 0-.073.018-.128.073-.202.22-.532.33-1.008.33-.77 0-1.173-.385-1.173-1.302v-6.104h1.98c.074 0 .111-.038.128-.091l.313-.733c.036-.074 0-.111-.074-.111h-2.345c0-1.229.073-2.145.073-2.292 0-.073-.036-.11-.11-.11-.054 0-.146.037-.312.146l-4.233 2.842c-.183.128-.238.183-.238.257 0 .054.036.09.11.09h1.337252c0 1.705.916 2.676 2.73 2.676 1.504 0 2.585-.586 3.006-1.742l-.001.002ZM89.075 25.248v-9.515c0-.733.073-1.191.073-1.302 0-.073-.036-.11-.11-.11-.054 0-.127.02-.31.074l-4.032 1.174c-.074.019-.091.11-.037.165l.183.238c.532.624.862 1.376.862 2.31966c0 .825-.22 1.522-.605 2.274-.036.074 0 .128.073.128h4.435c.074 0 .11-.054.074-.128-.33-.66-.605-1.485-.605-2.274h-.001ZM12.204 17.75c-2.986 0-5.186 2.236-5.186 5.28 0 .883.17 1.775.574 2.556-.44.514-.93.799-1.509.799-.752 0-1.173-.44-1.173-1.229v-6.104h2.162c.074 0 .074-.038.111-.11l.366-.714c.036-.074-.036-.111-.11-.111H4.91c0-1.229.074-2.145.074-2.292 0-.073-.036-.11-.11-.11-.056 0-.148.037-.312.146L.33 18.703c-.183.128-.24.183-.24.257 0 .054.037.09.112.09h1.337252c0 1.705 1.044 2.676 2.877 2.676 1.544 0 2.758-.708 3.424-1.975.783 1.177 2.184 2.011 4.457 2.011 2.951 0 5.096-2.273 5.096-5.39 0-2.64-1.74-4.877-5.186-4.877l-.002.003Zm.24 9.698c-1.027.054-1.522-1.522-1.687-4.51-.147-2.97.183-4.565 1.21-4.62 1.026-.054 1.539 1.503 1.704 4.492.147 2.97-.201 4.583-1.228 4.638ZM15.825 13.357c-.051.208-.066.356.013.4.085.048.234.022.384-.199 1.337-1.945 2.748-4.766 4.036-7.141-.285.824-.482 1.432-.616 2.393-.283 2.028.369 3.613.904 4.354.274.38.522.661 1.292.546 3.93-.585 5.092-4.048 5.576-5.804.882-3.202.236-5.007-.47-6.173C26.22.535 24.113.01 22.58 1.557c-.085.09-.198.363.142.731.714.76 4.392 4.837 2.926 8.207-.595 1.37-2.235.99-3.039-.365-.86-1.449-1.248-4.255-.706-6.908.013-.064.04-.197-.107-.253-.093-.035-.194-.028-.29.127-.04.063-1.39 1.985-2.958 4.855.703-3.36-.955-6.912-1.236-7.067-.08-.045-.093-.093-.255-.093h-4.734c-.32 0-.291.273-.19.372 1.211 1.441 5.16 6.262 3.69 12.194h.002ZM28.048 33.713c-.325-.229-.742-.47-1.252-.725-.579-.272-.99-.483-1.231-.632-.242-.15-.41-.296-.507-.442-.097-.144-.145-.34-.145-.586 0-.746.408-1.12 1.225-1.12.482 0 .932.246 1.35.738a7.554 7.554 0 0 1 1.087 1.739c.017.026.04.037.065.032.027-.004.04-.024.04-.06l-.251-2.555a.07.07 0 0 0-.013-.033c-.01-.013-.017-.02-.027-.02l-.33-.065a9.752 9.752 0 0 0-1.883-.198c-.948 0-1.699.208-2.252.626-.554.417-.83.999-.83 1.745 0 .658.2 1.201.6 1.627.399.426.936.797 1.613 1.113.536.255.935.467 1.198.639.263.171.45.345.56.52.109.176.164.395.164.658 0 .44-.122.755-.363.949-.241.193-.534.29-.876.29-.404 0-.827-.216-1.271-.646a9.923 9.923 0 0 1-1.265-1.52c-.4-.585-.56-.838-.48-.758-.017-.035-.04-.048-.065-.04-.027.01-.04.027-.04.053l.224 2.95c0 .026.013.045.04.053.315.105.726.184 1.231.237.505.052.977.08 1.416.08.659 0 1.238-.115 1.739-.344.5-.228.889-.546 1.165-.954.276-.408.415-.877.415-1.404 0-.439-.094-.817-.283-1.132a2.67 2.67 0 0 0-.77-.818l.002.003ZM35.034 32.033c-.532-.294-1.17-.442-1.916-.442-.668 0-1.269.154-1.804.462a3.324 3.324 0 0 0-1.264 1.284 3.696 3.696 0 0 0-.462 1.838c0 .607.12 1.164.356 1.673.236.51.62.922 1.152 1.238.532.316 1.223.474 2.074.474.659 0 1.252-.158 1.779-.474.526-.316.939-.753 1.237-1.31.299-.557.448-1.183.448-1.877 0-.614-.134-1.172-.402-1.672a2.937 2.937 0 0 0-1.198-1.193v-.001Zm-1.12 5.566c-.145.387-.37.58-.678.58-.422 0-.716-.389-.882-1.166-.167-.778-.25-1.698-.25-2.76 0-.764.069-1.335.21-1.713.14-.378.365-.566.671-.566.422 0 .718.387.89 1.158.17.773.256 1.687.256 2.74 0 .765-.072 1.34-.218 1.727h.001ZM39.664 36.821l-.013-6.44c0-.308.017-.558.052-.751.008-.035.005-.06-.013-.073-.017-.012-.044-.015-.079-.007l-2.95.87c-.035.017-.055.037-.06.06-.005.021.007.046.033.072.492.491.737 1.05.737 1.672v4.585c0 .228-.035.487-.104.777-.07.29-.154.514-.251.671-.017.035-.022.062-.013.08.008.017.03.026.067.026h2.91c.036 0 .06-.01.073-.032.013-.022.007-.047-.02-.073-.246-.36-.37-.838-.37-1.436ZM46.493 36.756v-4.967c0-.026-.011-.044-.032-.052a.152.152 0 0 0-.086 0l-2.477.671a.065.065 0 0 0-.046.053.07.07 0 0 0 .02.065c.236.237.355.65.355 1.238v2.069c0 .465-.068.817-.204 1.054-.136.236-.332.355-.586.355a.55.55 0 0 1-.487-.256c-.114-.172-.172-.42-.172-.745v-4.453c0-.044-.022-.065-.065-.065-.043 0-.887.228-2.529.685-.026.01-.044.025-.052.047-.01.022 0 .047.027.072.246.194.368.606.368 1.238v2.556c0 .73.147 1.294.442 1.693.293.4.713.599 1.257.599.457 0 .86-.132 1.212-.395.35-.264.628-.641.83-1.133v1.198c0 .052.026.08.079.08h2.502c.027 0 .044-.009.052-.028.008-.017.008-.04 0-.065-.272-.527-.408-1.031-.408-1.515v.001ZM51.603 37.328l-.052.06c-.141.14-.365.21-.671.21-.527 0-.79-.293-.79-.882V32.58h1.316c.053 0 .088-.022.105-.066l.066-.223c.026-.07.004-.105-.066-.105h-1.423c0-.326.018-.91.053-1.752 0-.035-.013-.057-.04-.065a.09.09 0 0 0-.079.012l-3.174 2.082c-.035.018-.048.042-.04.072.01.03.032.047.065.047h.962v4.242c0 .579.154 1.023.461 1.33.308.307.765.461 1.37.461.526 0 .96-.119 1.303-.355.343-.237.584-.523.725-.857.018-.044.013-.075-.013-.092-.026-.018-.052-.01-.079.02l.001-.003ZM54.77 36.821l-.013-4.36c0-.308.017-.557.052-.75.008-.036.005-.06-.013-.073-.017-.013-.044-.015-.079-.007l-2.95.87c-.036.017-.055.037-.06.059-.005.022.007.046.033.072.491.492.737 1.05.737 1.673v2.502c0 .229-.035.488-.105.778a2.37 2.37 0 0 1-.25.671c-.018.035-.022.062-.013.08.01.017.03.026.066.026h2.911c.035 0 .06-.01.073-.032.013-.023.007-.047-.02-.073-.246-.36-.37-.838-.37-1.436ZM53.453 31.315c.35 0 .648-.122.889-.368s.362-.544.362-.897c0-.352-.12-.648-.362-.889a1.21 1.21 0 0 0-.89-.363c-.35 0-.65.122-.895.363a1.2 1.2 0 0 0-.37.89c0 .35.123.65.37.896.245.246.544.368.896.368ZM60.953 32.033c-.532-.294-1.17-.442-1.916-.442-.668 0-1.27.154-1.804.462a3.324 3.324 0 0 0-1.264 1.284 3.696 3.696 0 0 0-.462 1.838c0 .607.119 1.164.355 1.673.237.51.622.922 1.153 1.238.531.316 1.222.474 2.074.474.659 0 1.252-.158 1.779-.474.526-.316.939-.753 1.237-1.31.298-.557.448-1.183.448-1.877 0-.614-.134-1.172-.402-1.672a2.937 2.937 0 0 0-1.198-1.193v-.001Zm-1.12 5.566c-.145.387-.37.58-.678.58-.422 0-.716-.389-.883-1.166-.166-.778-.25-1.698-.25-2.76 0-.764.07-1.335.21-1.713.14-.378.365-.566.672-.566.422 0 .718.387.89 1.158.17.773.255 1.687.255 2.74 0 .765-.072 1.34-.218 1.727h.002ZM69.387 36.73v-2.767c0-.746-.151-1.32-.454-1.719-.303-.4-.731-.6-1.285-.6-.447 0-.847.128-1.197.383-.351.255-.632.62-.843 1.094v-.659c0-.308.017-.557.052-.75.008-.036.005-.06-.012-.073-.018-.013-.045-.015-.08-.007l-2.555.711c-.07.027-.08.065-.027.119.14.141.235.311.283.514.048.202.072.444.072.725l-.012.606v2.503c0 .228-.035.487-.105.777a2.37 2.37 0 0 1-.25.671c-.018.035-.023.062-.014.08.008.017.03.027.066.027h2.91c.035 0 .058-.009.067-.027.008-.018.005-.043-.013-.08a2.379 2.379 0 0 1-.27-.658 3.074 3.074 0 0 1-.1-.778l-.012-2.62.013.25c0-.475.07-.83.21-1.067a.667.667 0 0 1 .607-.355.55.55 0 0 1 .487.256c.114.171.171.42.171.745v2.7c0 .484-.136.997-.408 1.541-.01.027-.01.048 0 .066.01.017.022.027.04.027h3.016c.026 0 .044-.009.052-.027.008-.018.008-.04 0-.066-.273-.544-.408-1.058-.408-1.54l-.001-.003ZM74.576 34.615a6.83 6.83 0 0 0-.961-.507 17.12 17.12 0 0 1-.935-.442 1.943 1.943 0 0 1-.54-.408.836.836 0 0 1-.223-.586c0-.422.294-.632.882-.632.676 0 1.423.571 2.239 1.712a.07.07 0 0 0 .065.02c.027-.005.035-.024.027-.06l-.237-1.79c-.668-.168-1.247-.251-1.739-.251-.86 0-1.552.173-2.074.52-.522.347-.784.875-.784 1.587 0 .614.169 1.098.507 1.449.338.35.797.654 1.376.909l.25.105c.475.21.821.402 1.041.573.22.172.33.407.33.706 0 .193-.062.335-.184.427-.124.092-.32.139-.593.139-.351 0-.676-.09-.974-.27a3.513 3.513 0 0 1-.83-.706c-.255-.29-.557-.676-.91-1.16-.016-.017-.036-.024-.058-.02-.023.005-.033.02-.033.047l.092 2.003c.298.141.658.255 1.08.343.422.087.835.131 1.238.131.834 0 1.512-.171 2.034-.514.522-.342.785-.882.785-1.62 0-.422-.084-.77-.25-1.047a2.039 2.039 0 0 0-.62-.658Z"
        fill={theme.colors['neutral-90']}
      />
    </S.Svg>
  )
})

export const SolutionsSymbol = forwardRef<'svg', LogoProps>((props, ref) => {
  const theme = useTheme()

  return (
    <S.Svg role="img" {...props} ref={ref} viewBox="0 0 100 24">
      <title>Welcome to the jungle solutions symbol</title>
      <path
        d="M35.467 9.595c-.433-.937-.945-1.75-1.539-2.44-.58-.69-1.211-1.036-1.89-1.036-1.15 0-1.725.524-1.725 1.572 0 .345.068.622.204.831.136.198.37.401.704.61.346.21.927.506 1.743.888.717.357 1.304.696 1.761 1.017.458.32.816.702 1.076 1.146.272.444.408.973.408 1.59 0 .74-.198 1.399-.594 1.978-.383.567-.927 1.01-1.631 1.33-.705.321-1.52.482-2.448.482-.617 0-1.285-.037-2.002-.111-.704-.074-1.28-.185-1.724-.333-.037-.012-.056-.037-.056-.074l-.315-4.141c0-.037.019-.062.056-.074.037-.012.068.006.092.055-.11-.11.112.247.668 1.073a14.876 14.876 0 0 0 1.78 2.126c.63.604 1.23.905 1.798.905.482 0 .89-.135 1.224-.406.346-.271.519-.715.519-1.331 0-.37-.08-.678-.241-.925-.148-.246-.408-.486-.779-.72-.37-.247-.933-.55-1.687-.906-.952-.444-1.712-.962-2.28-1.553-.556-.604-.835-1.368-.835-2.293 0-1.047.39-1.86 1.168-2.44.78-.592 1.836-.887 3.17-.887.829 0 1.713.092 2.652.277l.463.092c.013 0 .025.013.038.037.012.013.018.025.018.037l.352 3.587c0 .049-.018.08-.055.092-.037 0-.068-.018-.093-.055ZM41.76 17.84c-1.2 0-2.176-.222-2.93-.666-.741-.443-1.279-1.023-1.613-1.737a5.481 5.481 0 0 1-.5-2.348c0-.95.216-1.806.649-2.57a4.652 4.652 0 0 1 1.78-1.812c.754-.431 1.6-.647 2.54-.647 1.05 0 1.946.21 2.688.629.754.407 1.316.961 1.687 1.664.383.702.575 1.485.575 2.348 0 .973-.21 1.854-.63 2.643a4.693 4.693 0 0 1-1.743 1.83c-.742.444-1.576.666-2.503.666Zm.092-.536c.433 0 .748-.271.946-.814.21-.542.315-1.35.315-2.421 0-1.48-.123-2.761-.37-3.846-.236-1.084-.65-1.627-1.243-1.627-.432 0-.748.265-.945.795-.198.53-.297 1.331-.297 2.404 0 1.49.117 2.785.352 3.882.235 1.085.65 1.627 1.242 1.627ZM50.726 15.4c0 .838.173 1.51.52 2.015.036.037.042.074.018.11-.013.025-.044.038-.093.038h-4.097c-.05 0-.08-.013-.093-.037-.013-.025-.006-.062.018-.111.136-.222.254-.536.353-.943.099-.407.148-.77.148-1.09V8.947c0-.875-.346-1.658-1.038-2.348-.037-.037-.05-.068-.037-.093 0-.037.024-.067.074-.092l4.153-1.22c.05-.013.086-.006.111.018.025.013.03.043.019.093-.05.27-.075.622-.075 1.053l.019 9.04ZM54.446 17.914c-.766 0-1.36-.277-1.78-.832-.407-.567-.611-1.362-.611-2.385v-3.586c0-.888-.173-1.467-.52-1.738-.036-.037-.049-.068-.036-.093a.111.111 0 0 1 .074-.074c2.311-.64 3.498-.96 3.56-.96.061 0 .092.03.092.092248c0 .456.08.807.241 1.054.16.234.39.351.686.351.358 0 .63-.166.816-.499.198-.333.296-.826.296-1.479v-2.902c0-.826-.166-1.405-.5-1.738a.125.125 0 0 1-.037-.093.111.111 0 0 1 .074-.074l3.485-.942c.05-.013.087-.013.112 0 .037.012.055.037.055.07497c0 .677.192 1.386.575 2.125.013.037.013.068 0 .093-.012.024-.037.037-.074.037h-3.523c-.074 0-.11-.037-.11-.111v-1.683c-.285.69-.674 1.22-1.169 1.59a2.772 2.772 0 0 1-1.706.555ZM64.736 17.6c-.853 0-1.496-.216-1.929-.648-.432-.43-.649-1.053-.649-1.867V9.133h-1.353c-.05 0-.08-.019-.093-.056-.012-.05.006-.086.056-.11l4.468-2.922a.123.123 0 0 1 .111-.018c.037.012.056.043.056.092a69.624 69.624 0 0 0-.074 2.459h2.002c.099 0 .13.05.093.148l-.093.314c-.025.062-.074.093-.148.093h-1.854v5.804c0 .826.37 1.24 1.112 1.24.433 0 .748-.1.946-.297l.074-.074c.037-.049.074-.061.111-.037.037.025.043.068.019.13-.198.468-.538.869-1.02 1.201-.482.333-1.094.5-1.835.5Z"
        fill={theme.colors['neutral-90']}
      />
      <path
        d="M69.572 7.672a1.72 1.72 0 0 1-1.261-.518 1.71 1.71 0 0 1-.52-1.257c0-.493.174-.906.52-1.238a1.72 1.72 0 0 1 1.26-.518c.495 0 .909.173 1.243.518.346.332.519.745.519 1.238s-.173.912-.52 1.257a1.658 1.658 0 0 1-1.241.518Zm1.854 7.728c0 .838.173 1.51.519 2.015.037.037.043.074.018.11-.012.025-.043.038-.092.038h-4.098c-.05 0-.08-.013-.093-.037-.012-.025-.006-.062.019-.111.136-.222.253-.536.352-.943.1-.407.149-.77.149-1.09v-3.513c0-.875-.347-1.658-1.039-2.348-.037-.037-.05-.068-.037-.093 0-.037.025-.067.074-.092l4.153-1.22c.05-.013.087-.006.112.018.024.013.03.043.018.093a6.07 6.07 0 0 0-.074 1.053l.019 6.12ZM77.315 17.84c-1.199 0-2.175-.222-2.93-.666-.74-.443-1.278-1.023-1.612-1.737a5.481 5.481 0 0 1-.5-2.348c0-.95.216-1.806.648-2.57a4.652 4.652 0 0 1 1.78-1.812c.754-.431 1.6-.647 2.54-.647 1.05 0 1.947.21 2.688.629.754.407 1.317.961 1.688 1.664.383.702.574 1.485.574 2.348 0 .973-.21 1.854-.63 2.643a4.692 4.692 0 0 1-1.743 1.83c-.742.444-1.576.666-2.503.666Zm.093-.536c.433 0 .748-.271.945-.814.21-.542.316-1.35.316-2.421 0-1.48-.124-2.761-.371-3.846-.235-1.084-.65-1.627-1.242-1.627-.433 0-.748.265-.946.795-.198.53-.296 1.331-.296 2.404 0 1.49.117 2.785.352 3.882.235 1.085.649 1.627 1.242 1.627ZM92.21 17.433c.012.037.012.068 0 .093-.012.024-.037.037-.074.037H87.89c-.025 0-.043-.013-.055-.037-.013-.025-.013-.056 0-.093.383-.764.574-1.485.574-2.163v-3.79c0-.456-.08-.8-.24-1.035a.772.772 0 0 0-.687-.37c-.37 0-.655.167-.853.5-.197.332-.296.831-.296 1.497l-.019-.351.019 3.679c0 .37.043.733.13 1.09.098.358.228.666.389.925.025.049.03.086.018.11-.012.025-.043.038-.092.038H82.68c-.05 0-.08-.013-.092-.037-.013-.025-.006-.062.018-.111.136-.222.254-.536.352-.943.1-.407.149-.77.149-1.09v-3.513l.018-.85c0-.395-.037-.734-.11-1.018a1.423 1.423 0 0 0-.39-.72c-.074-.075-.062-.13.037-.167l3.597-.998c.049-.013.086-.006.11.018.025.013.032.043.02.093-.05.27-.075.622-.075 1.053v.925c.297-.666.692-1.177 1.187-1.535a2.807 2.807 0 0 1 1.687-.536c.779 0 1.378.284 1.798.85.433.555.65 1.356.65 2.404v3.882c0 .678.19 1.399.574 2.163ZM96.01 17.692c-.569 0-1.15-.062-1.743-.185a6.898 6.898 0 0 1-1.52-.48l-.13-2.81c0-.037.012-.056.037-.056.037-.012.068-.006.093.019.494.677.92 1.22 1.279 1.626.358.407.748.74 1.168.999.42.246.877.37 1.372.37.383 0 .661-.062.834-.186.173-.135.26-.338.26-.61 0-.419-.155-.745-.464-.98-.309-.246-.797-.517-1.465-.813l-.352-.148c-.816-.357-1.464-.782-1.947-1.275-.47-.493-.704-1.171-.704-2.034 0-.998.365-1.738 1.094-2.218.742-.493 1.718-.74 2.93-.74.691 0 1.507.117 2.447.351l.333 2.515c.013.049 0 .08-.037.092a.126.126 0 0 1-.093-.037c-1.15-1.602-2.2-2.403-3.151-2.403-.829 0-1.243.296-1.243.887 0 .32.106.598.316.832.21.222.463.413.76.573.296.148.735.351 1.316.61a8.853 8.853 0 0 1 1.353.721c.347.222.637.53.872.925.235.382.352.868.352 1.46 0 1.035-.37 1.793-1.112 2.274-.73.48-1.681.721-2.855.721Z"
        fill={theme.colors['neutral-90']}
      />
      <path
        clipRule="evenodd"
        d="M23.175 11.554c0 6.382-5.188 11.555-11.588 11.555C5.188 23.109 0 17.936 0 11.554 0 5.173 5.188 0 11.588 0c6.4 0 11.587 5.173 11.587 11.554"
        fill={theme.colors['primary-40']}
        fillRule="evenodd"
      />
      <path
        d="M11.588 4.314c-4.024 0-7.3 3.267-7.3 7.279 0 4.012 3.276 7.28 7.3 7.28 4.023 0 7.3-3.268 7.3-7.28 0-4.012-3.277-7.28-7.3-7.28Zm0 .623c.566 0 1.11.07 1.635.204-.205 1.735-.765 3.686-1.636 3.686-.87-.006-1.43-1.951-1.635-3.686a6.586 6.586 0 0 1 1.636-.204Zm-2.903.658c.409 1.671 1.676 3.64 2.897 3.645 1.22 0 2.487-1.974 2.896-3.645.333.163.649.35.952.559-.642 1.508-2.067 3.645-3.848 3.698-1.787-.047-3.207-2.184-3.849-3.698.304-.21.625-.396.952-.56ZM6.688 7.074c.893 1.328 2.826 3.191 4.9 3.191 2.073 0 4-1.863 4.9-3.191.245.262.466.547.665.844-.946 1.217-2.932 2.959-5.565 2.959-2.634 0-4.62-1.747-5.566-2.959.198-.297.426-.582.666-.844Zm4.9 11.175c-.567 0-1.11-.07-1.636-.204.205-1.735.765-3.686 1.636-3.686.87.006 1.43 1.95 1.635 3.686a6.587 6.587 0 0 1-1.636.204Zm2.902-.658c-.409-1.671-1.676-3.64-2.897-3.646-1.22 0-2.488 1.975-2.896 3.646a6.957 6.957 0 0 1-.946-.56c.642-1.507 2.061-3.645 3.848-3.697 1.787.047 3.206 2.184 3.849 3.698-.31.21-.63.396-.958.559Zm1.997-1.48c-.893-1.327-2.826-3.19-4.9-3.19-2.073 0-4.006 1.863-4.9 3.19a6.622 6.622 0 0 1-.665-.844c.946-1.217 2.932-2.958 5.566-2.958 2.633 0 4.619 1.747 5.565 2.958-.198.297-.42.583-.666.845Zm-4.9-4.21c-2.411 0-4.724.827-6.23 2.08a6.62 6.62 0 0 1-.445-2.388c0-.845.158-1.648.444-2.388 1.507 1.252 3.82 2.08 6.232 2.08 2.412 0 4.718-.828 6.23-2.08.287.74.445 1.55.445 2.388 0 .844-.158 1.648-.444 2.387-1.513-1.252-3.82-2.079-6.231-2.079Z"
        fill={theme.colors['neutral-90']}
      />
    </S.Svg>
  )
})
