class E2E:
  @staticmethod
  def install(service, manager, webdriver):
    service = service(
      executable_path=manager().install())

    driver = webdriver.Chrome(service=service)
    driver.get("https://www.google.com/")
    
    driver.quit()
