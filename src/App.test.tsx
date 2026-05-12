import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
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

  it('keeps native touch scrolling enabled for the image gallery', () => {
    render(<App />)

    const galleryTrack = document.querySelector('.gallery-scroller') as HTMLDivElement | null
    expect(galleryTrack).not.toBeNull()

    const track = galleryTrack!
    expect(track.style.touchAction).toBe('pan-x')
  })

  it('does not bind custom pointer-drag handlers to the image gallery', () => {
    render(<App />)

    const galleryTrack = document.querySelector('.gallery-scroller') as HTMLDivElement | null
    expect(galleryTrack).not.toBeNull()

    const track = galleryTrack!
    Object.defineProperty(track, 'scrollLeft', { value: 120, writable: true, configurable: true })
    track.setPointerCapture = vi.fn()
    track.releasePointerCapture = vi.fn()

    fireEvent.pointerDown(track, { pointerId: 7, pointerType: 'touch', clientX: 240 })
    fireEvent.pointerMove(track, { pointerId: 7, pointerType: 'touch', clientX: 180 })
    fireEvent.pointerUp(track, { pointerId: 7, pointerType: 'touch' })

    expect(track.scrollLeft).toBe(120)
    expect(track.setPointerCapture).not.toHaveBeenCalled()
    expect(track.releasePointerCapture).not.toHaveBeenCalled()
  })
})
