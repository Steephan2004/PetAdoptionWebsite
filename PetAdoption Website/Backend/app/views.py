from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from django.http import JsonResponse,HttpResponse
import smtplib
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from .models import UserRegistration,Pet
from .serializers import RegistrationSerializer,PetSerializer

class RegisterView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Registration successful!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            user = UserRegistration.objects.get(username=username,password=password)
            if user:  # Compare hashed passwords
                return Response({"message": "Login successful!"}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Invalid password."}, status=status.HTTP_401_UNAUTHORIZED)
        except UserRegistration.DoesNotExist:
            return Response({"error": "User does not exist."}, status=status.HTTP_404_NOT_FOUND)

class PetListView(APIView):
    def get(self, request):
        pets = Pet.objects.all()
        serializer = PetSerializer(pets, many=True)
        return Response(serializer.data)


def filter_options(request):
    # Get distinct pet types
    pet_types = Pet.objects.values_list('type', flat=True).distinct()

    # Get distinct breeds
    breeds = Pet.objects.values_list('breed', flat=True).distinct()

    # Get distinct genders
    genders = Pet.objects.values_list('gender', flat=True).distinct()

    # Get distinct ages
    ages = Pet.objects.values_list('age', flat=True).distinct()

    # Return the options as a JSON response
    options = {
        'pet_types': list(pet_types),
        'breeds': list(breeds),
        'genders': list(genders),
        'ages': list(ages),
    }

    return JsonResponse(options)

class ContactFormAPIView(APIView):
    renderer_classes = [JSONRenderer]  # This will ensure the response is in JSON format.

    def post(self, request):
        full_name = request.data.get('fullName')
        email = request.data.get('email')
        phone = request.data.get('phone')
        address = request.data.get('address')
        print(full_name,email,phone,address)
        
        sender_email = 'rsteephan85@gmail.com'
        password = 'jxepyycpsxvxtxuo'  # Don't store passwords in plain text
        subject = "Pet Adoption Website"
        receiver_email= 'steephan383@gmail.com'

    # Build HTML content
        html_content = f"""
        <p>{full_name} would like to connect to us!!!</p>
        
            <p>Name: {full_name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {address}</p>
        
    """

    # Create a multipart message
        msg = MIMEMultipart('alternative')
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = subject

        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)

        try:
      # Connect to Gmail's SMTP server
            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        # Log in to your Gmail account
                server.login(sender_email, password)
        # Send email
                server.sendmail(sender_email, receiver_email, msg.as_string())

            print('Email sent successfully')
            return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)

        except smtplib.SMTPException as e:
            print(f'Failed to send email: {str(e)}')
            return Response({'error': f'Failed to send email: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


        # Process the data, e.g., save to database or send an email

