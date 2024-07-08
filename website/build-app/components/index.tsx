type LogoWttjProps = {
  black?: boolean
  h: number
  w: number
}

export const LogoWttj = ({ black, h, w }: LogoWttjProps) => {
  return (
    <svg height={h} viewBox="0 0 621 200" width={w}>
      <title>welcome to the jungle</title>
      <path
        d="M518.71 102.12c2.278 0 8.094 5.809 8.094 10.252 0 .416-.187.64-.564.678l-.118.006h-15.168c8.894 3.874 13.34 11.283 13.34 19.598 0 14.134-11.628 24.617-27.705 24.617-5.018 0-9.237-.57-12.772-1.713a6.99 6.99 0 00-1.14 3.761c0 2.9 2.727 4.489 7.54 4.557l.324.002h20.984c10.262 0 15.961 3.874 15.961 10.823 0 13.676-28.048 25.299-43.553 25.299-9.01 0-15.51-3.874-15.51-9.802 0-3.532 2.394-7.633 7.182-11.165-4.902-2.053-7.525-5.698-7.525-10.596 0-5.925 5.247-11.51 13.343-13.674-9.92-4.103-13.57-12.307-13.57-20.285 0-13.9 11.971-24.157 28.277-24.157 4.333 0 8.1.571 11.518 1.484 3.532-4.671 7.072-7.748 9.92-9.346.342-.226.8-.34 1.142-.34zm-41.962 77.371c4.56 10.255 14.936 12.531 23.03 12.531 7.299 0 12.319-2.621 12.319-6.38 0-3.128-2.516-4.72-7.865-4.785l-.345-.002h-17.45c-3.76 0-7.066-.456-9.69-1.364zM333.867 93.687c.685 0 .685.681.345 1.023-2.556 2.555-4.572 5.544-4.674 10.964l-.004.433v48.314c0 21.19-10.488 30.763-33.294 30.763-1.14 0-2.281-.113-2.737-.229-.911-.226-1.138-1.024-.229-1.479 9.22-3.93 14.446-12.178 14.594-23.111l.003-.477v-53.78c0-5.697-2.052-8.776-4.675-11.398-.32-.322-.339-.944.227-1.017l.113-.006h30.33zm61.007 16.636c.414 0 .64.187.677.565l.005.12v45.918c0 4.901 1.715 10.028 3.764 14.132.213.422.03.75-.362.794l-.094.006h-23.262c-.412 0-.64-.19-.679-.57l-.005-.12v-11.162c-3.646 8.999-10.373 14.128-18.927 14.128-10.036 0-15.726-7.47-15.849-20.755l-.002-.44v-23.702c0-7.175-1.822-10.025-3.303-11.507-.322-.32-.242-.838.14-.996l.087-.028 21.437-5.93c1.138-.34 1.596-.453 1.936-.453.42 0 .645.19.68.575l.004.11v41.249c0 6.038 2.168 9.228 6.045 9.228 4.711 0 7.326-4.3 7.41-12.687l.002-.416v-19.145c0-7.175-1.826-10.025-3.306-11.507-.32-.32-.242-.838.138-.996l.086-.028 21.44-5.93c1.14-.34 1.596-.453 1.938-.453zm198.75 0c13.913 0 23.832 7.064 23.832 17.092 0 11.165-12.432 18.917-31.13 18.917-1.596 0-2.85-.116-4.103-.232 2.623 7.865 8.665 12.994 18.244 12.994 11.971 0 17.787-8.09 19.154-10.483.571-1.027 1.483-.687 1.37.34-.912 7.177-9.577 25.183-31.017 25.183-17.675 0-29.873-12.308-29.873-31.224 0-19.598 13.114-32.587 33.524-32.587zm-329.884 0c13.914 0 23.833 7.064 23.833 17.092 0 11.165-12.432 18.917-31.13 18.917-1.595 0-2.85-.116-4.103-.232 2.623 7.865 8.666 12.994 18.245 12.994 11.97 0 17.784-8.09 19.153-10.483.572-1.027 1.483-.687 1.37.34-.914 7.177-9.577 25.183-31.016 25.183-17.676 0-29.87-12.308-29.87-31.224 0-19.598 13.11-32.587 33.518-32.587zM29.76 97.675c.458 0 .685.226.685.684 0 .908-.459 6.607-.459 14.24h15.737c.456 0 .912.231.683.687l-2.279 4.442c-.229.456-.229.685-.684.685H29.986v37.943c0 4.901 2.626 7.633 7.299 7.633 3.605 0 6.648-1.766 9.39-4.963-2.502-4.853-3.572-10.396-3.572-15.885 0-18.92 13.68-32.82 32.264-32.82 21.44 0 32.273 13.9 32.273 30.311 0 19.372-13.34 33.501-31.701 33.501-14.144 0-22.864-5.19-27.733-12.498-4.144 7.874-11.694 12.27-21.299 12.27-11.402 0-17.9-6.039-17.9-16.635v-38.857H.686c-.458 0-.685-.23-.685-.569 0-.455.34-.797 1.483-1.595L27.82 98.59c1.027-.688 1.596-.914 1.939-.914zm118.701-.002c.456 0 .683.23.683.687 0 .891-.44 6.397-.456 13.817v.422h14.597c.423 0 .648.2.497.591l-.042.094-1.94 4.56c-.1.307-.296.523-.666.563l-.13.007h-12.316v37.943c0 5.696 2.51 8.091 7.298 8.091 2.963 0 5.018-.684 6.274-2.05.34-.345.569-.46.798-.46.571 0 .571.573.34 1.141-2.623 7.18-9.35 10.826-18.7 10.826-11.158 0-16.855-5.898-16.986-16.267l-.003-.368v-38.856h-8.323c-.458 0-.684-.23-.684-.57 0-.43.303-.756 1.287-1.458l.193-.136 26.34-17.661c1.028-.687 1.597-.916 1.94-.916zm41.39-8.659c.455 0 .687.23.687.682 0 .667-.432 3.371-.457 7.696l-.002.397v25.865c3.764-8.546 10.262-13.33 18.587-13.33 10.036 0 15.726 7.47 15.849 20.752l.002.44v25.41c0 4.901 1.71 10.028 3.76 14.132.214.422.031.75-.363.794l-.094.006h-27.59c-.456 0-.687-.345-.456-.8 2.306-4.502 3.657-8.683 3.753-13.565l.006-.567v-24.725c0-6.04-2.162-9.23-6.04-9.23-4.716 0-7.328 4.302-7.412 12.688l-.002.416v20.851c0 4.901 1.712 10.028 3.764 14.132.21.422.03.75-.362.794l-.094.006h-27.594c-.456 0-.685-.345-.456-.8 2.306-4.502 3.661-8.683 3.758-13.565l.006-.567V113.63c0-5.643-1.933-10.21-5.074-14.016l-.289-.344-1.137-1.48c-.316-.32-.243-.83.136-.995l.093-.031 25.084-7.29c1.138-.343 1.599-.459 1.936-.459zm255.766 21.31c10.035 0 15.725 7.47 15.848 20.752l.002.44v25.41c0 4.901 1.71 10.028 3.761 14.132.213.422.03.75-.363.794l-.095.006h-27.59c-.458 0-.684-.345-.458-.8 2.308-4.502 3.659-8.683 3.756-13.565l.005-.567v-24.725c0-6.04-2.162-9.23-6.042-9.23-4.71 0-7.329 4.302-7.412 12.688l-.002.416v20.851c0 4.901 1.486 10.141 3.764 14.132.213.422.03.75-.36.794l-.093.006h-27.592c-.461 0-.688-.345-.461-.8 2.53-4.396 3.68-8.687 3.76-13.585l.004-.547v-27.689c0-7.175-1.939-9.912-3.303-11.507-.322-.32-.245-.838.14-.996l.086-.028 21.434-5.93c1.14-.34 1.597-.453 1.941-.453.454 0 .68.227.68.684 0 2.277-.226 7.633-.337 13.448 3.648-9.005 10.375-14.132 18.927-14.132zm107.757-21.31c.455 0 .685.23.685.682 0 .667-.432 3.371-.458 7.696v59.534c0 4.901 1.714 10.028 3.763 14.132.213.422.03.75-.362.794l-.094.006h-27.592c-.458 0-.685-.345-.458-.8 2.306-4.502 3.66-8.683 3.758-13.565l.006-.567V113.63c0-5.643-1.935-10.21-5.072-14.016l-.288-.344-1.14-1.48c-.316-.32-.243-.83.134-.995l.092-.031 25.087-7.29c1.14-.343 1.594-.459 1.939-.459zM84.49 141.772c-1.025-18.574-4.22-28.258-10.604-27.915-6.387.34-8.436 10.254-7.525 28.713 1.027 18.571 4.104 28.373 10.49 28.028 6.385-.34 8.55-10.365 7.639-28.826zm410.272-27.914c-4.901.224-7.071 7.178-6.27 20.165.797 13.673 4.103 19.827 8.894 19.711 5.246-.226 7.069-7.633 6.27-20.28-.797-12.987-3.763-19.94-8.894-19.596zm97.15 0c-7.867 0-11.173 12.53-11.173 22.332 0 2.735.342 5.354.911 7.749 9.922-2.166 15.506-9.117 15.506-20.283 0-6.609-2.05-9.799-5.244-9.799zm-329.883 0c-7.867 0-11.175 12.53-11.175 22.332 0 2.735.345 5.354.914 7.749 9.919-2.166 15.505-9.117 15.505-20.283 0-6.609-2.05-9.799-5.244-9.799zM167.08 10.77c4.39 7.245 8.408 18.47 2.92 38.371-3.01 10.914-10.246 32.436-34.692 36.074-4.793.712-6.339-1.036-8.04-3.394-3.331-4.606-7.38-14.458-5.62-27.06.834-5.972 2.057-9.754 3.824-14.876-8.018 14.766-16.789 32.3-25.11 44.392-.938 1.366-1.865 1.532-2.394 1.238-.493-.275-.402-1.2-.08-2.496 9.146-36.864-15.42-66.825-22.952-75.784-.607-.594-.792-2.206.997-2.31l.186-.005h29.447c1.002 0 1.085.3 1.586.577 1.745.958 12.062 23.034 7.689 43.92 9.753-17.831 18.151-29.777 18.398-30.174.597-.956 1.224-1.004 1.803-.785.913.342.752 1.172.67 1.57-3.367 16.486-.955 33.936 4.397 42.94 5.003 8.418 15.204 10.773 18.907 2.267 9.119-20.95-13.766-46.291-18.202-51.014-2.12-2.289-1.417-3.987-.886-4.54 9.537-9.621 22.643-6.36 27.152 1.089zm189.025 10.538c21.434 0 32.264 13.9 32.264 30.311 0 19.37-13.34 33.5-31.695 33.5-18.75 0-27.978-9.117-31.318-20.201-3.15 8.304-11.858 20.202-29.005 20.202-17.786 0-29.762-12.537-29.762-31.224 0-20.851 14.37-32.588 31.13-32.588 9.923 0 17.904 4.328 23.72 14.471 1.44 2.666 1.264 4.785-1.063 5.63l-.194.066-16.648 4.904c-.796.224-1.254 0-.91-1.598 2.28-11.052.454-19.943-5.243-19.943-6.959 0-10.153 12.763-10.153 22.11 0 13.446 6.613 23.127 19.5 23.127 9.645 0 15.29-5.452 17.757-8.727a39.489 39.489 0 01-.652-7.223c0-18.917 13.682-32.817 32.272-32.817zm165.565 0c13.912 0 23.833 7.062 23.833 17.093 0 11.165-12.431 18.911-31.132 18.911-1.596 0-2.85-.11-4.103-.226 2.623 7.862 8.668 12.99 18.242 12.99 11.973 0 17.789-8.087 19.158-10.482.57-1.029 1.48-.684 1.37.34-.914 7.18-9.58 25.186-31.019 25.186-17.67 0-29.875-12.31-29.875-31.224 0-19.596 13.116-32.588 33.526-32.588zm-314.374 0c13.911 0 23.833 7.062 23.833 17.093 0 11.165-12.432 18.911-31.132 18.911-1.596 0-2.85-.11-4.103-.226 2.623 7.862 8.667 12.99 18.242 12.99 11.973 0 17.791-8.087 19.158-10.482.569-1.029 1.483-.684 1.37.34-.912 7.18-9.58 25.186-31.019 25.186-17.673 0-29.873-12.31-29.873-31.224 0-19.596 13.114-32.588 33.524-32.588zM259.866 0c.455 0 .681.229.681.682 0 .666-.429 3.369-.454 7.693l-.001.398v59.139c0 4.898 1.71 10.026 3.763 14.129.213.425.03.748-.363.792l-.095.005h-27.594c-.454 0-.683-.34-.454-.797 2.306-4.499 3.659-8.678 3.756-13.562l.006-.567v-43.3c0-5.643-1.936-10.208-5.07-14.014l-.288-.344-1.14-1.481c-.322-.32-.243-.836.14-.998l.086-.029 25.088-7.29C259.067.112 259.52 0 259.865 0zm207.07 21.308c9.358 0 15.038 7.464 15.163 20.081l.002.428V67.91c0 4.9 1.254 10.144 3.306 14.131.21.423.03.746-.36.79l-.093.005H458.27c-.455 0-.684-.34-.455-.795 2.193-4.383 3.225-8.66 3.3-13.542l.005-.59V42.502c0-5.354-2.167-8.546-5.36-8.546-4.034 0-6.637 4.296-6.724 12.02l-.002.403V67.91c0 4.9 1.48 10.028 3.305 14.131.215.423.03.746-.361.79l-.094.005H425.2c-.453 0-.682-.34-.453-.795 2.08-4.487 3.213-8.655 3.3-13.52l.006-.611V42.5c0-5.354-2.166-8.546-5.358-8.546-4.039 0-6.64 4.296-6.727 12.02l-.002.403V67.91c0 4.9 1.254 10.144 3.308 14.131.213.423.03.746-.364.79l-.094.005h-27.137c-.455 0-.682-.34-.455-.795 2.527-4.396 3.677-8.684 3.756-13.584l.005-.547V40.224c0-7.18-1.939-9.915-3.306-11.51-.32-.32-.242-.838.142-.996l.087-.028 21.435-5.927c1.143-.342 1.596-.455 1.94-.455.456 0 .683.229.683.682 0 2.281-.227 7.635-.34 13.447 3.648-9.002 10.375-14.13 18.242-14.13 7.637 0 12.839 4.974 14.522 13.723l.075.407h.226c3.648-9.002 10.378-14.13 18.245-14.13zm-112.317 3.53c-6.381.345-8.438 10.257-7.524 28.718 1.027 18.572 4.106 28.371 10.49 28.029 6.387-.342 8.552-10.37 7.638-28.826-1.024-18.575-4.22-28.26-10.604-27.92zm165.341 0c-7.867 0-11.175 12.536-11.175 22.336 0 2.734.342 5.353.914 7.746 9.916-2.161 15.505-9.112 15.505-20.28 0-6.61-2.049-9.802-5.244-9.802zm-314.374 0c-7.867 0-11.173 12.536-11.173 22.336 0 2.734.34 5.353.912 7.746 9.919-2.161 15.505-9.112 15.505-20.28 0-6.61-2.05-9.802-5.244-9.802z"
        fill={black ? '#000' : '#FFF'}
        fillRule="evenodd"
      />
    </svg>
  )
}
