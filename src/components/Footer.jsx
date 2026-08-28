function Footer() {
  return (
    <footer className="text-center py-3">
      <p className="mb-0 text-muted">
        © {new Date().getFullYear()} <a href="https://www.youtube.com/@theProvidersOfficial" target="_blank" rel="noopener noreferrer">
          The Providers
        </a>. All rights reserved.
      </p>

      <small className="text-muted">
        Developed by <a href="https://github.com/muhammadfarhandeveloper" target="_blank" rel="noopener noreferrer">
          Muhammad Farhan
        </a>
      </small>
    </footer>
  );
}

export default Footer;