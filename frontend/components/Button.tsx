// components/Button.tsx
export default function Button({ onClick, children }: { onClick: () => void, children: React.ReactNode }) {
    return (
      <button onClick={onClick} className="btn">{children}</button>
    )
  }
  