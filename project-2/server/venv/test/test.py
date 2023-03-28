import unittest


class Test(unittest.TestCase):
  @staticmethod
  def test_upper(self):
    self.assertEqual("foo".upper(), "FOO")


if __name__ == "__main__":
  unittest.main()