import { Window } from '@/components/Window'

const Example = () => {
  return (
    <>
      <Window>
        <Window.Header>
          <Window.Header.Title title="Landscape Image" />
        </Window.Header>
        <Window.Media>
          <img alt="Example media content" src="/landscape.jpg" />
        </Window.Media>
      </Window>

      <Window>
        <Window.Header>
          <Window.Header.Title title="Portrait Image" />
        </Window.Header>
        <Window.Media>
          <img alt="Example media content" src="/portrait.jpg" />
        </Window.Media>
      </Window>
    </>
  )
}

export default Example
