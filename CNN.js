
class CNN
{
  constructor(URL)
  {
    this.url=URL;
    this.classifier=ml5.imageClassifier(URL + 'model.json');
  }
  Classify(imageFrame,callBack)
  {
    //const flippedFrame = ml5.flipImage(imageFrame);
    this.classifier.classify(imageFrame, callBack);

  }

}
