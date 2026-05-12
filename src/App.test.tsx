import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App interactions', () => {
  it('toggles the equipment section', () => {
    render(<App />)

    const hideButton = screen.getByRole('button', { name: /ocultar equipo/i })
    expect(screen.getByText(/Cámara RED SCARLET W/i)).toBeInTheDocument()

    fireEvent.click(hideButton)

    expect(screen.queryByText(/Cámara RED SCARLET W/i)).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ver equipo/i })).toBeInTheDocument()
  })

  it('marks the carousel track as touch-scrollable', () => {
    render(<App />)

    const galleryTrack = document.querySelector('.gallery-scroller') as HTMLElement | null
    expect(galleryTrack).not.toBeNull()

    fireEvent.pointerDown(galleryTrack!, { pointerType: 'touch' })

    expect(galleryTrack).toHaveFocus()
  })
})
