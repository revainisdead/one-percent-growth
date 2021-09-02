import PyPDF2


with open("estatement-4-2020.pdf", "rb") as pdf_fileobj:
    pdf_reader = PyPDF2.PdfFileReader(pdf_fileobj)

    num_pages = pdf_reader.numPages

    text = ""
    i = 0
    while True:
        try:
            print("Loading page {} to extract text.".format(i))
            pageobj = pdf_reader.getPage(i)

            i += 1
        except IndexError as e:
            print("No more pages, ending loop.")
            break

        print("- Extracting text . . .")
        page_text = pageobj.extractText(Tj_sep="\n", TJ_sep="\n")

        text += page_text
        print("Done.")

    text_lines = text.split("\n")

    # Extract sensitive information

    # Find line ACCOUNT
    # remove this line

    # find line "If this was your first month you have auto qualified"
    # remove next line

    # Find line Credit Dividend
    # remove next line



    #Line 6: ACCOUNT: xxxxxxx
    #Line 127: xxxxxx
    #Line 167: xxxxxx


    # EACH TRANSACTION FORMAT
    # ---
    #Line 19: Amount
    #Line 20: Transaction Description
    #Line 21: Date

    # Example transaction
    # ---
    #Line 22: -1.08
    #Line 23: 04-01
    #Line 24: POS  APPLE.COM/BILL  866-712-7753 CAUS

    #class BankRecord      -> total savings after EACH transaction (zip up by dates???)
    #class BankTransaction -> amount and details of each transaction
    amount = -1.08

    first_char = "a"
    # strip first character ->
    if first_char == "-":
        delta_type = "increase" # DeltaChoices.INCREASE
    elif first_char != "-":
        delta_type = "decrease" # DeltaChoices.DECREASE

    sale_system="POS"
    seller="APPLY.COM/BILL"
    phone_number="866-712-7753"
    location_identifier="CAUS"



    # After every transaction: check if two lines later there is "Credit Dividend"
    # This marks the final transaction to parse

    #Line 123: POS  GEICO  *AUTO  800-841-3000 DCUS
    #Line 124: 15.47
    #Line 125: 04-30
    #Line 126: Credit Dividend

    for i, line in enumerate(text_lines):
        print("Line {}:".format(i), line)
