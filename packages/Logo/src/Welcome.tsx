import React from 'react'
import { useTheme } from '@xstyled/styled-components'

import * as S from './styles'

import { LogoProps } from '.'

export const Welcome: React.FC<LogoProps> = props => {
  const theme = useTheme()

  return (
    <S.Svg role="img" {...props} viewBox="0 0 100 25">
      <title>Welcome to the jungle logo</title>
      <path
        d="M12.686 0C5.691 0 0 5.605 0 12.494c0 6.889 5.691 12.494 12.686 12.494s12.686-5.605 12.686-12.494C25.372 5.604 19.681 0 12.686 0Zm0 1.074c.978 0 1.93.124 2.846.346-.351 2.975-1.33 6.333-2.846 6.333-1.517 0-2.495-3.358-2.846-6.333a11.294 11.294 0 0 1 2.846-.346ZM7.634 2.198c.715 2.864 2.921 6.246 5.04 6.259 2.13 0 4.324-3.383 5.039-6.26.576.272 1.128.593 1.654.963-1.115 2.593-3.585 6.26-6.694 6.346C9.578 9.42 7.096 5.753 5.98 3.16a13.707 13.707 0 0 1 1.655-.962Zm5.052 21.728c-.978 0-1.93-.123-2.846-.346.351-2.975 1.33-6.333 2.846-6.333 1.517 0 2.495 3.358 2.846 6.333-.915.235-1.868.346-2.846.346Zm5.04-1.136c-.715-2.864-2.921-6.247-5.04-6.26-2.131 0-4.325 3.384-5.04 6.26a11.075 11.075 0 0 1-1.654-.963c1.116-2.592 3.585-6.26 6.694-6.346 3.096.087 5.578 3.754 6.694 6.346-.526.37-1.078.691-1.655.963Zm3.472-2.53c-1.555-2.285-4.914-5.482-8.512-5.482-3.598 0-6.957 3.197-8.512 5.481a11.948 11.948 0 0 1-1.165-1.457c1.642-2.086 5.089-5.086 9.677-5.086 4.576 0 8.035 3 9.677 5.086-.35.519-.74 1-1.165 1.457Zm3.083-7.766c0 1.444-.275 2.827-.777 4.099-2.62-2.149-6.644-3.568-10.83-3.568-4.187 0-8.211 1.42-10.831 3.58a11.15 11.15 0 0 1-.777-4.099c0-1.444.275-2.827.777-4.099 2.62 2.149 6.644 3.58 10.83 3.58 4.187 0 8.211-1.42 10.831-3.567.502 1.247.777 2.63.777 4.074Zm-11.595-1.222c-4.575 0-8.035-3-9.677-5.087.35-.518.74-1 1.165-1.457 1.555 2.284 4.914 5.482 8.512 5.482 3.598 0 6.957-3.198 8.512-5.482.426.457.814.939 1.153 1.457-1.642 2.087-5.09 5.087-9.665 5.087Zm70.45-2.149c-.15.284-.815 1.186-2.194 1.186-1.09 0-1.78-.568-2.08-1.457.15.012.313.025.463.025 2.144 0 3.56-.877 3.56-2.136 0-1.136-1.153-1.939-2.732-1.939-2.345 0-3.836 1.47-3.836 3.667 0 2.136 1.391 3.519 3.41 3.519 2.444 0 3.447-2.037 3.547-2.84.025-.099-.075-.148-.138-.025Zm-4.45-1.382c0-1.111.376-2.531 1.278-2.531.364 0 .602.358.59 1.111 0 1.26-.64 2.05-1.768 2.284-.05-.26-.1-.556-.1-.864ZM29.007 3.198c-.075-.075-.087-.235.1-.247H32.506c.125 0 .125.024.175.061.2.1 1.38 2.605.878 4.951 1.115-2.012 2.08-3.358 2.093-3.407.075-.1.138-.124.213-.087.1.05.088.136.076.173-.39 1.864-.1 3.84.501 4.852.577.95 1.742 1.222 2.156.247 1.04-2.37-1.567-5.222-2.08-5.753-.239-.247-.164-.445-.101-.519 1.128-1.062 2.645-.679 3.159.148.501.815.965 2.087.326 4.321-.351 1.235-1.179 3.655-3.974 4.074-.539.074-.727-.123-.915-.382-.376-.519-.84-1.63-.652-3.062.088-.667.238-1.099.439-1.68l-.1.174c-.865 1.58-1.78 3.37-2.67 4.679l-.1.148c-.101.148-.214.173-.277.136-.062-.025-.05-.136-.012-.284 1.04-4.148-1.768-7.531-2.633-8.543Zm36.24 8.469c.29-.494.427-.963.44-1.506V6.938c0-.802-.226-1.11-.377-1.296-.025-.025-.025-.086.013-.099h.013l2.457-.666c.137-.05.175-.05.225-.05.05 0 .075.025.075.074 0 .247-.025.864-.05 1.519.426-1.013 1.191-1.593 2.081-1.593.865 0 1.467.556 1.655 1.531l.012.074h.025c.376-1.037 1.154-1.617 2.056-1.617 1.078 0 1.705.827 1.743 2.247v3.012c0 .556.138 1.148.376 1.593.012.049 0 .086-.025.086H72.907c-.05 0-.075-.05-.05-.086.238-.482.363-.951.376-1.482V7.222c0-.605-.238-.963-.614-.963-.452 0-.752.482-.765 1.334v2.493c0 .556.163 1.136.376 1.593.013.05 0 .086-.025.086H69.146c-.05 0-.075-.049-.05-.086.226-.494.364-.95.376-1.482V7.236c0-.605-.238-.963-.614-.963-.451 0-.752.481-.765 1.333V10.099c0 .555.15 1.148.376 1.592.026.05 0 .087-.025.087H65.31c-.062-.025-.075-.074-.062-.111ZM54.393 12c1.968 0 2.958-1.333 3.322-2.272C58.09 10.975 59.143 12 61.286 12c2.094 0 3.623-1.593 3.623-3.778 0-1.84-1.24-3.42-3.698-3.42-2.13 0-3.698 1.58-3.673 3.729 0 .284.025.555.076.815a2.54 2.54 0 0 1-2.044.975c-1.479 0-2.231-1.099-2.231-2.617 0-1.062.364-2.494 1.166-2.494.652 0 .865 1 .601 2.247-.05.173.013.21.1.173l1.906-.556.025-.012c.25-.099.276-.346.1-.642-.664-1.148-1.579-1.63-2.72-1.63-1.918 0-3.56 1.321-3.56 3.667C50.982 10.593 52.35 12 54.392 12Zm6.656-6.79H61.123c.69.025 1.029 1.136 1.154 3.148.1 2.086-.15 3.21-.878 3.26-.74.024-1.09-1.075-1.203-3.174-.113-2.074.125-3.185.852-3.234ZM47.31 9.16c.013-.123-.087-.16-.15-.049-.15.284-.815 1.185-2.194 1.185-1.09 0-1.78-.568-2.08-1.456.137.012.288.024.463.024 2.144 0 3.56-.876 3.56-2.136 0-1.135-1.128-1.938-2.733-1.938-2.344 0-3.835 1.47-3.848 3.667 0 2.136 1.404 3.518 3.422 3.518 2.457.025 3.46-2.012 3.56-2.815Zm-4.6-1.42c0-1.11.376-2.53 1.278-2.53.364 0 .602.358.602 1.111 0 1.26-.652 2.05-1.78 2.284-.063-.26-.1-.556-.1-.864Zm4.387-4.357c-.025-.025-.025-.087.013-.1h.012l2.87-.814a.48.48 0 0 1 .202-.062c.05 0 .075.025.075.074 0 .075-.05.37-.05.852729c0 .555.2 1.136.438 1.592.025.05 0 .087-.025.087h-3.184c-.05 0-.075-.05-.05-.087.25-.493.414-.95.439-1.481v-5c0-.63-.213-1.136-.564-1.556l-.05-.061-.126-.173ZM99.86 19.185c-.15.284-.815 1.185-2.194 1.185-1.09 0-1.78-.58-2.081-1.469.138.013.288.025.464.025 2.143 0 3.56-.877 3.56-2.136 0-1.136-1.128-1.938-2.733-1.938-2.319 0-3.836 1.469-3.848 3.691 0 2.136 1.404 3.519 3.422 3.519 2.444 0 3.447-2.037 3.547-2.84.025-.11-.087-.16-.137-.037Zm-4.463-1.395c0-1.111.376-2.53 1.278-2.53.377 0 .602.357.59 1.11 0 1.26-.64 2.037-1.768 2.284-.05-.259-.1-.555-.1-.864Zm-2.658 3.914c.013.05 0 .086-.025.086h-3.172c-.05 0-.075-.05-.05-.086.251-.494.414-.95.427-1.482v-4.987c0-.63-.213-1.136-.564-1.556l-.05-.062-.138-.16c-.025-.025-.025-.087.012-.099h.013l2.87-.815a.48.48 0 0 1 .201-.061c.05 0 .075.024.075.074 0 .074-.05.37-.05.851741c.013.506.213 1.087.451 1.556Zm-45.053-6.531v.012l-.225.519c-.013.024-.025.061-.075.061H45.968v4.284c0 .642.288.926.827.926.326 0 .577-.074.715-.234.05-.05.063-.062.088-.062.062 0 .062.062.05.136-.301.802-1.078 1.222-2.144 1.222-1.266 0-1.918-.654-1.943-1.815v-4.444h-.965c-.05 0-.075-.025-.075-.062 0-.05.025-.086.138-.16l.025-.013 3.02-1.987c.126-.074.176-.1.226-.1.05 0 .076.026.076.075 0 .099-.05.704-.05 1.53v.075h1.654c.063-.025.1-.012.075.037Zm14.429 4.012c-.15.284-.815 1.185-2.194 1.185-1.09 0-1.78-.58-2.08-1.469.137.013.287.025.463.025 2.144 0 3.56-.877 3.56-2.136 0-1.136-1.153-1.938-2.733-1.938-2.344 0-3.836 1.469-3.836 3.691 0 2.136 1.392 3.519 3.41 3.519 2.445 0 3.447-2.037 3.548-2.84.025-.11-.088-.16-.138-.037ZM57.65 17.79c0-1.111.376-2.53 1.279-2.53.363 0 .589.357.602 1.11 0 1.26-.652 2.037-1.78 2.284-.05-.259-.1-.555-.1-.864Zm-2.582 3.926c.012.05 0 .086-.025.086H51.86c-.05 0-.075-.049-.05-.086.25-.494.413-.95.426-1.481v-2.89c0-.678-.238-1.036-.69-1.036-.526 0-.827.481-.84 1.407v2.42c0 .555.201 1.136.44 1.592.012.05 0 .087-.026.087h-3.172c-.05 0-.075-.05-.05-.087.251-.493.414-.95.427-1.481v-4.988c0-.63-.213-1.136-.564-1.555l-.05-.062-.138-.16c-.026-.025-.026-.087.012-.1h.013l2.87-.814c.126-.062.163-.074.2-.074.051 0 .076.024.076.074 0 .074-.05.37-.05.852v2.938c.439-.963 1.178-1.506 2.131-1.506 1.153 0 1.793.827 1.818 2.32v2.94c-.013.555.188 1.135.426 1.604Zm12.122-8.617c-.288.296-.514.63-.527 1.234v5.655c0 2.444-1.203 3.555-3.823 3.555a1.75 1.75 0 0 1-.313-.024c-.1-.025-.126-.124-.026-.173 1.04-.445 1.643-1.395 1.68-2.63v-6.284c0-.654-.238-1.012-.526-1.32-.025-.026-.05-.1.012-.124h3.485V13c.075-.012.075.062.038.099Zm7.458 8.617c.013.05 0 .086-.025.086h-2.682c-.05 0-.075-.012-.075-.061V20.469c-.427 1.012-1.191 1.593-2.157 1.593-1.153 0-1.792-.827-1.817-2.309V17c0-.802-.213-1.136-.376-1.296-.025-.025-.025-.087.012-.1h.013l2.457-.666c.138-.05.175-.05.225-.05.05 0 .076.013.076.063v4.666c0 .68.238 1.037.69 1.037.526 0 .826-.481.839-1.407v-2.235c0-.802-.213-1.136-.376-1.296-.025-.025-.025-.086.012-.099h.013l2.457-.666c.088-.075.138-.087.175-.087.05 0 .076.012.076.062V20.123c.037.544.225 1.124.463 1.593Zm7.56 0c.012.05 0 .086-.026.086h-3.172c-.05 0-.074-.049-.05-.086.251-.494.414-.95.427-1.481v-2.89c0-.678-.238-1.036-.69-1.036-.526 0-.827.481-.84 1.407v2.42c0 .555.163 1.148.44 1.592.012.05 0 .087-.026.087H75.1c-.062 0-.075-.05-.062-.087.288-.493.426-.963.439-1.506V17c0-.815-.226-1.111-.376-1.296-.025-.025-.025-.087.012-.1h.013l2.457-.666c.138-.05.175-.05.225-.05.05 0 .076.026.076.075 0 .247-.025.864-.05 1.519.376-1.025 1.153-1.605 2.13-1.605 1.129 0 1.78.827 1.818 2.32v2.939c-.012.53.176 1.11.426 1.58Zm-44.64-6.877c-2.13 0-3.698 1.556-3.698 3.704 0 .63.125 1.247.414 1.803-.313.37-.664.568-1.078.568-.527 0-.828-.31-.828-.865v-4.284h1.555c.025 0 .025-.024.063-.074l.25-.506v-.012c0-.05-.05-.062-.087-.062h-1.793v-.074c.012-.827.063-1.432.063-1.53 0-.05-.026-.075-.076-.075s-.1.025-.2.086l-3.021 1.988-.025.012c-.1.075-.138.124-.138.161 0 .025.025.062.075.062h.953v4.444c.025 1.16.764 1.815 2.055 1.815 1.091 0 1.969-.494 2.432-1.383.565.827 1.555 1.408 3.172 1.408 2.093 0 3.623-1.593 3.623-3.778-.013-1.827-1.241-3.408-3.71-3.408Zm.188 6.828c-.74.049-1.09-1.074-1.203-3.173-.1-2.087.138-3.198.865-3.247H37.494c.69.025 1.04 1.136 1.153 3.148.088 2.099-.163 3.222-.89 3.272Zm49.729-.741h-2.482c-.54-.012-.84-.198-.84-.519 0-.16.05-.296.138-.432.413.136.89.198 1.466.198 1.843 0 3.172-1.185 3.172-2.778 0-.938-.514-1.765-1.53-2.21h1.756c.05 0 .062-.024.062-.074 0-.506-.664-1.16-.915-1.16-.025 0-.075.012-.15.061-.314.173-.727.519-1.128 1.062a5.176 5.176 0 0 0-1.317-.16c-1.855 0-3.234 1.148-3.234 2.716 0 .9.426 1.827 1.555 2.284-.915.246-1.53.876-1.53 1.543 0 .555.301.95.865 1.185-.539.407-.815.864-.815 1.26 0 .666.752 1.098 1.78 1.098 1.768 0 4.977-1.309 4.977-2.852 0-.79-.652-1.222-1.83-1.222Zm-1.918-5.667h.05c.54.025.865.803.953 2.21.088 1.432-.126 2.26-.727 2.284-.54.012-.915-.679-1.016-2.235-.075-1.456.188-2.234.74-2.259Zm.577 8.815c-.94 0-2.132-.247-2.645-1.407.3.098.677.16 1.115.16h2.056c.602 0 .878.198.878.531 0 .42-.577.716-1.404.716Z"
        fill={theme.colors['neutral-90']}
      />
    </S.Svg>
  )
}