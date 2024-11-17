const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Brandon Li.
      <style jsx>{`
        @media screen and (max-width: 1000px) {}
      `}</style>
    </small>
  )
}
