import { Window } from '@/components/Window'

const Example = () => {
  return (
    <div className="flex flex-col gap-md">
      <Window>
        <Window.Header>
          <Window.Header.Title title="X-Small body" />
        </Window.Header>
        <Window.Body size="xs">
          <p>Very small body of a window</p>
        </Window.Body>
      </Window>

      <Window>
        <Window.Header>
          <Window.Header.Title title="Small body" />
        </Window.Header>
        <Window.Body size="sm">
          <p>Small body of a window</p>
        </Window.Body>
      </Window>

      <Window>
        <Window.Header>
          <Window.Header.Title title="Medium body" />
        </Window.Header>
        <Window.Body size="md">
          <p>Medium body of a window</p>
        </Window.Body>
      </Window>

      <Window>
        <Window.Header>
          <Window.Header.Title title="Large body" />
        </Window.Header>
        <Window.Body size="lg">
          <p>Large body of a window</p>
        </Window.Body>
      </Window>

      <Window>
        <Window.Header>
          <Window.Header.Title title="X-Large body" />
        </Window.Header>
        <Window.Body size="xl">
          <p>TVery large body of a window</p>
        </Window.Body>
      </Window>
    </div>
  )
}
export default Example
