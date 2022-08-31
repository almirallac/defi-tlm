from django.urls import reverse, resolve
from django.test import SimpleTestCase, TestCase
from ninja_generator.views import getNinjaNameCollection, generateNinjaNameFromInput



# Reference https://www.youtube.com/watch?v=0MrgsYswT1c&list=PLbpAWbHbi5rMF2j5n6imm0enrSD9eQUaM&index=2
class TestUrls(TestCase):

    def test_getNinjaNameCollection_Url(self):
        url = reverse("get-ninja-name-collection")
        self.assertEqual(resolve(url).func, getNinjaNameCollection)

    def test_generateNinjaName_Url(self):
        url = reverse("get-ninja-name")
        self.assertEqual(resolve(url).func, generateNinjaNameFromInput)
    
    def test_getNinjaNameCollection_Url_Response(self):
        url = reverse("get-ninja-name-collection")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)

    def test_generateNinjaNameUrl_Response_Without_Data(self):
        url = reverse("get-ninja-name")
        response = self.client.get(url)
        self.assertEqual(response.status_code, 400)
    
